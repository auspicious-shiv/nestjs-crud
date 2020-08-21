import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credenials.dto';
export declare class UserRepository extends Repository<User> {
    singUp(authCredentialDto: AuthCredentialDto): Promise<void>;
    private hashPassword;
    validateUserPassword(authCredentialDto: AuthCredentialDto): Promise<string>;
}
