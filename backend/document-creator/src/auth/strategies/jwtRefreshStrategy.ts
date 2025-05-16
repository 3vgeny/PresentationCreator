import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../../entities/User';
import { AuthService } from '../auth.service';
import { JwtDto } from '../dto/jwtDto';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET')!,
    });
  }

  async validate(payload: JwtDto) {
    let user: User;

    try {
      user = await this.authService.findByLogin(payload.sub);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
    
    if (!user.hashRefreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    const { password, ...validateUser } = user;

    return validateUser;
  }
}
