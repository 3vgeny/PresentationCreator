import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
  Headers,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtDto } from './dto/jwtDto';
import { RegisterUserDto } from './dto/registerUserDto';
import { JwtAccessAuthGuard } from './guards/jwtAccessGuard';
import { JwtRefreshAuthGuard } from './guards/jwtRefreshGuard';
import { LocalAuthGuard } from './guards/localGuard';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAccessAuthGuard)
  @Get('me')
  getMe(@Request() req: any) {
    return req.user;
  }

  @Post('register')
  regiser(@Body() dto: RegisterUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any) {
    return this.authService.generateTokens(req.user);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  refresh(
    @Headers('authorization') authHeader: string,
    @Request() req: any
  ) {    
    return this.authService.refreshTokens(req.user, authHeader); 
  }

  @UseGuards(JwtAccessAuthGuard)
  @Get('logout')
  logout(@Request() req: any) {
    return this.authService.logout(req.user);
  }
}
