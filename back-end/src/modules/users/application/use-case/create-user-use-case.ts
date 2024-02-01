/* eslint-disable @typescript-eslint/no-namespace */
import { UserRepository, User } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../../common/use-case';

export namespace CreateUserUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private userRepo: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output | string> {
      const entity = new User(input);
      return await this.userRepo.create(entity);
    }
  }

  export type Input = { name: string; email: string; password: string };

  export type Output = User | string;
}

export default CreateUserUseCase;
