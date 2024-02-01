/* eslint-disable @typescript-eslint/no-namespace */
import { ClientRepository } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../../common/use-case';

export namespace StaticClientUseCase {
  export class UseCase implements DefaultUseCase<void, Output> {
    constructor(private userRepo: ClientRepository.Repository) { }

    async execute(): Promise<Output> {
      const users = await this.userRepo.static();
      return users;
    }
  }

  export type Output = any;
}

export default StaticClientUseCase;
