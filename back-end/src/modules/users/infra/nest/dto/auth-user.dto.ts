import { IsString } from 'class-validator';
import { AuthUserUseCase } from '../../../application';

export class AuthUserDto implements AuthUserUseCase.Input {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
