/* eslint-disable @typescript-eslint/no-namespace */
import { Client, ClientRepository } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../../common/use-case';

export namespace CreateClientUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private userRepo: ClientRepository.Repository) {}

    async execute(input: Input): Promise<Output | string> {
      const entity = new Client(input);
      return await this.userRepo.create(entity);
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
    complement?: string;
    latitude?: string;
    longitude?: string;
  };

  export type Output = Client | string;
}

export default CreateClientUseCase;
