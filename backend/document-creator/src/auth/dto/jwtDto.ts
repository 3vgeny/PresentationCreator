import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class JwtDto {
  @IsString()
  @IsNotEmpty()
    sub: string;
  
  @IsNumber()
  @IsNotEmpty()
    iat: number;

  @IsNumber()
  @IsNotEmpty()
    exp: number;
}
