import { v4 as uuidV4 } from 'uuid';
import ClientValidatorFactory from '../validators/client.validator';
import { EntityValidationError } from '../../../../common/errors';

export type ClientProperties = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  cep?: string;
  state?: string;
  city?: string;
  address?: string;
  complement?: string
  latitude?: string
  longitude?: string
  createdAt?: Date;
  updatedAt?: Date;
};

export class Client {
  constructor(public readonly props: ClientProperties) {
    Client.validate(props);
    this.id = this.props.id ?? uuidV4();
    this.name = this.props.name;
    this.email = this.props.email ?? "";
    this.phone = this.props.phone ?? "";
    this.cep = this.props.cep ?? "";
    this.address = this.props.address ?? "";
    this.state = this.props.state ?? "";
    this.city = this.props.city ?? "";
    this.complement = this.props.complement ?? "";
    this.longitude = this.props.longitude ?? "";
    this.latitude = this.props.latitude ?? "";
    this.createdAt = this.props.createdAt ?? new Date();
    this.updatedAt = this.props.updatedAt ?? new Date();
  }

  static validate(props: ClientProperties) {
    try {
      const validator = ClientValidatorFactory.create();
      const isValid = validator.validate(props);
      if (!isValid) {
        throw new EntityValidationError(validator.errors);
      }
    } catch (error) {
      console.log(error)
    }
  }

  get id() {
    return this.props.id;
  }

  private set id(value) {
    this.props.id = value;
  }

  get name() {
    return this.props.name;
  }

  private set name(value) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  private set email(value) {
    this.props.email = value;
  }

  get phone() {
    return this.props.phone;
  }

  private set phone(value) {
    this.props.phone = value;
  }

  get cep() {
    return this.props.cep;
  }

  private set cep(value) {
    this.props.cep = value;
  }

  get address() {
    return this.props.address;
  }

  private set address(value) {
    this.props.address = value;
  }

  get state() {
    return this.props.state;
  }

  private set state(value) {
    this.props.state = value;
  }

  get city() {
    return this.props.state;
  }

  private set city(value) {
    this.props.city = value;
  }

  get complement() {
    return this.props.complement;
  }

  private set complement(value) {
    this.props.complement = value;
  }

  get latitude() {
    return this.props.latitude;
  }

  private set latitude(value) {
    this.props.latitude = value;
  }

  get longitude() {
    return this.props.longitude;
  }

  private set longitude(value) {
    this.props.longitude = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  private set createdAt(value) {
    this.props.createdAt = value;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private set updatedAt(value) {
    this.props.updatedAt = value;
  }
}
