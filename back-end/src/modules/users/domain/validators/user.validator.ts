import { IsString, IsNotEmpty } from 'class-validator';
import { UserProperties } from '../entities/users.entity';
import { ClassValidatorFields } from '../../../../common/validators/class-validator-fields';

export class UserRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(data: UserProperties) {
    Object.assign(this, data);
  }
}

export class UserValidator extends ClassValidatorFields<UserProperties> {
  validate(data: UserProperties): boolean {
    return super.validate(new UserRules(data ?? ({} as any)));
  }
}

export class UserValidatorFactory {
  static create() {
    return new UserValidator();
  }
}

export default UserValidatorFactory;
