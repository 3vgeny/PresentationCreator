import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'login' });
  }
  
  async validate(login: string, password: string) {
    try {      
      const user = await this.authService.validateLoginPassword(login, password);

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException('Incorrect login or password', HttpStatus.UNAUTHORIZED);
    }
  }
}
