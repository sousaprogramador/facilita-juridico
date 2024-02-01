/* eslint-disable @typescript-eslint/no-namespace */
import { Client } from '../entities/client.entity';

export interface ClientRepositoryInterface {
  findAll: () => Promise<any>;
  static: () => Promise<any>;
  delete: (id: string) => Promise<void>;
  findById: (id: string) => Promise<any>;
  update: (id: string, data: Client) => Promise<void | string>;
  create: (entity: Client) => Promise<Client | string>;
}

export namespace ClientRepository {
  export type Repository = ClientRepositoryInterface;
}

export default ClientRepository;
