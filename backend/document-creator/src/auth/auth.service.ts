import { 
  HttpException, 
  HttpStatus, 
  Inject, 
  Injectable, 
  UnauthorizedException, 
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/User';
import { UserRepository } from '../user/user.repository';

import { RegisterUserDto } from './dto/registerUserDto';
import { ACCESS_JWT } from './jwt/accessToken.module';
import { REFRESH_JWT } from './jwt/refreshToken.module';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    @Inject(ACCESS_JWT) private readonly jwtAccessService: JwtService,
    @Inject(REFRESH_JWT) private readonly jwtRefrashService: JwtService
  ) { }

  async findByLogin(login: string) {
    const user = await this.userRepo.findByLogin(login);

    if (!user) throw new HttpException('Fail find user by login', HttpStatus.BAD_REQUEST);

    return user;
  }

  async isExistLogin(login: string) {
    const user = await this.userRepo.findByLogin(login);

    return !!user;
  }

  async validateLoginPassword(login: string, password: string) {
    const user = await this.findByLogin(login);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new HttpException('Incorrect login or password', HttpStatus.BAD_REQUEST);

    const { password: passwordUser, ...validateUser } = user;

    return validateUser;
  }

  async register(dto: RegisterUserDto) {
    const user = await this.isExistLogin(dto.login);

    if (user) throw new HttpException('Fail user already exist', HttpStatus.BAD_REQUEST);

    const hashPassword = await this.hashPassword(dto.password);
    const newUser = await this.userRepo.create({ ...dto, password: hashPassword });
    
    return await this.generateTokens({ login: newUser.login });
  }

  async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);

    if (!hash) throw new HttpException('Fail hash password', HttpStatus.INTERNAL_SERVER_ERROR);

    return hash;
  }

  async generateTokens(user: Pick<User, 'login'>) {
    const payload = { sub: user.login };
    const accessToken = await this.jwtAccessService.signAsync(payload);
    const refreshToken = await this.jwtRefrashService.signAsync(payload);
    const hashed = await bcrypt.hash(refreshToken, 10);

    await this.updateRefreshToken(user.login, hashed);

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(login: string, hashedToken: string | null) {
    await this.userRepo.updateRefreshTokenByLogin(login, hashedToken);
  }

  async refreshTokens(user: Omit<User, 'password'>, authHeader: string) {
    const refreshToken = authHeader.split(' ')[1];
    
    if (!user.hashRefreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    };

    const isMatch = await bcrypt.compare(refreshToken, user.hashRefreshToken);

    if (!isMatch) throw new UnauthorizedException('Refresh token invalid');

    return await this.generateTokens(user);
  }

  async logout(user: Pick<User, 'login'>) {
    await this.updateRefreshToken(user.login, null);
    
    return true;
  }
}
