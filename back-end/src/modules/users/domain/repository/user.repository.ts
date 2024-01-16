/* eslint-disable @typescript-eslint/no-namespace */
import { User } from '../entities/users.entity';

export interface UserRepositoryInterface {
  findAll: () => Promise<any>;
  delete: (id: string) => Promise<void>;
  findById: (id: string) => Promise<any>;
  update: (data: User) => Promise<void | string>;
  create: (entity: User) => Promise<User | string>;
  findByEmail: (email: string) => Promise<User>;
}

export namespace UserRepository {
  export type Repository = UserRepositoryInterface;
}

export default UserRepository;
