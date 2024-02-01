import { IsString } from 'class-validator';
import { CreateClientUseCase } from '../../../application';

export class CreateClientDto implements CreateClientUseCase.Input {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cep: string;

  @IsString()
  state: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsString()
  complement: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  createdAt: Date;

  @IsString()
  updatedAt: Date;
}
