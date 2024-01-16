import { IsString, IsNotEmpty } from 'class-validator';
import { ClientProperties } from '../entities/client.entity';
import { ClassValidatorFields } from '../../../../common/validators/class-validator-fields';

export class ClientRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  complement: string;

  @IsString()
  @IsNotEmpty()
  latitude: string;

  @IsString()
  @IsNotEmpty()
  longitude: string;

  constructor(data: ClientProperties) {
    Object.assign(this, data);
  }
}

export class UserValidator extends ClassValidatorFields<ClientProperties> {
  validate(data: ClientProperties): boolean {
    return super.validate(new ClientRules(data ?? ({} as any)));
  }
}

export class UserValidatorFactory {
  static create() {
    return new UserValidator();
  }
}

export default UserValidatorFactory;
