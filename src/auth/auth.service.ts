import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credenials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    private jwtService:JwtService
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.singUp(authCredentialDto);
  }

  async signIn(authCredentialDto:AuthCredentialDto):Promise<{accessToken:string}>{
      const username= await this.userRepository.validateUserPassword(authCredentialDto);
      if(!username){
          throw new UnauthorizedException("Invalid credential")
      }
      const payload:JwtPayload={username};
      const accessToken=await this.jwtService.sign(payload);
      return {accessToken}
  }
}
