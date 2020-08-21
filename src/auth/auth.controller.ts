import { Controller, Post, Body, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credenials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signUp')
  signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto):Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }
  @Post('signIn')
  signIp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto):Promise<{accessToken:string}> {
    return this.authService.signIn(authCredentialDto);
  }

  // @Post('/test')
  // @UseGuards(AuthGuard())
  // test(@GetUser() req ){
  //   console.log(req);
    
  // }
}
