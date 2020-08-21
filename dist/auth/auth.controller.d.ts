import { AuthCredentialDto } from './dto/auth-credenials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialDto: AuthCredentialDto): Promise<void>;
    signIp(authCredentialDto: AuthCredentialDto): Promise<{
        accessToken: string;
    }>;
}
