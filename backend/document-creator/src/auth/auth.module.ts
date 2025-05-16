import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessTokenModule } from './jwt/accessToken.module';
import { JwtRefreshTokenModule } from './jwt/refreshToken.module';
import { JwtAccessStrategy } from './strategies/jwtAccessStrategy';
import { JwtRefreshStrategy } from './strategies/jwtRefreshStrategy';
import { LocalStrategy } from './strategies/localStrategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtAccessTokenModule,
    JwtRefreshTokenModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
})
export class AuthModule { }
