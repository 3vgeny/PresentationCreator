import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';

export const REFRESH_JWT = 'REFRESH_JWT';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_REFRESH_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_REFRESH_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: REFRESH_JWT,
      useExisting: JwtService,
    },
  ],
  exports: [REFRESH_JWT],
})
export class JwtRefreshTokenModule {}
