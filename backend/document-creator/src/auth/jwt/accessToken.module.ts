import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';

export const ACCESS_JWT = 'ACCESS_JWT';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_ACCESS_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: ACCESS_JWT,
      useExisting: JwtService,
    },
  ],
  exports: [ACCESS_JWT],
})
export class JwtAccessTokenModule {}
