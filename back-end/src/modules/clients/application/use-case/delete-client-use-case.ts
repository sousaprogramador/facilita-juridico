/* eslint-disable @typescript-eslint/no-namespace */
import { ClientRepository } from '../../domain';

export namespace DeleteClientUseCase {
  export class UseCase {
    constructor(private userRepo: ClientRepository.Repository) { }

    async execute(id: string): Promise<Output> {
      const removedClient = await this.userRepo.delete(id);
      return removedClient;
    }
  }

  export type Input = { id: string; }

  export type Output = any;
}

export default DeleteClientUseCase;
