/* eslint-disable @typescript-eslint/no-namespace */
import { ClientRepository } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../../common/use-case';

export namespace ListClientUseCase {
  export class UseCase implements DefaultUseCase<void, Output> {
    constructor(private userRepo: ClientRepository.Repository) { }

    async execute(): Promise<Output> {
      const users = await this.userRepo.findAll();
      return users;
    }
  }

  export type Input = {
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
  }

  export type Output = any;
}

export default ListClientUseCase;
