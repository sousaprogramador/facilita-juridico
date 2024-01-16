/* eslint-disable @typescript-eslint/no-namespace */
import { UserRepository } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../../common/use-case';

export namespace ListUsersUseCase {
  export class UseCase implements DefaultUseCase<void, Output> {
    constructor(private userRepo: UserRepository.Repository) {}

    async execute(): Promise<Output> {
      const users = await this.userRepo.findAll();
      return users;
    }
  }

  export type Output = any;
}

export default ListUsersUseCase;
