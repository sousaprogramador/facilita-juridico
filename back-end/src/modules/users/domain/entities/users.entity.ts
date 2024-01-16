import { v4 as uuidV4 } from 'uuid';
import UserValidatorFactory from '../validators/user.validator';
import { EntityValidationError } from '../../../../common/errors';
import * as bcrypt from 'bcrypt';

export type UserProperties = {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User {
  constructor(public readonly props: UserProperties) {
    User.validate(props);
    this.id = this.props.id ?? uuidV4();
    this.name = this.props.name;
    this.email = this.props.email;
    this.password = this.encryptPassword(this.props.password);
    this.createdAt = this.props.createdAt ?? new Date();
    this.updatedAt = this.props.updatedAt ?? new Date();
  }

  static validate(props: UserProperties) {
    const validator = UserValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  comparePassword(candidatePassword: string): boolean {
    return bcrypt.compareSync(candidatePassword, this.password);
  }

  encryptPassword(password: string) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
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

  get password() {
    return this.props.password;
  }

  private set password(value) {
    this.props.password = value;
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
