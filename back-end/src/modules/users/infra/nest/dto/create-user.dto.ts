import { IsString } from 'class-validator';
import { CreateUserUseCase } from '../../../application';

export class CreateUserDto implements CreateUserUseCase.Input {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
