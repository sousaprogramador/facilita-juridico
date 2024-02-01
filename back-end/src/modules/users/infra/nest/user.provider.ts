/* eslint-disable @typescript-eslint/no-namespace */
import { UserRepository } from '../../domain';
import { dbProvider } from '../../../../common/db';
import { AuthGuard } from '../../../../guards/auth.guard';
import { PG_CONNECTION } from '../../../../common/constants';
import { UserRepository as UserPool } from '../db/user.repository';
import {
  AuthUserUseCase,
  ListUsersUseCase,
  CreateUserUseCase,
} from '../../application/use-case';

export namespace USER_PROVIDERS {
  export namespace REPOSITORIES {
    export const USER_POOL_REPOSITORY = {
      provide: 'UserRepository',
      inject: [PG_CONNECTION],
      useFactory: () => {
        return new UserPool(dbProvider.useValue);
      },
    };

    export const USER_GUARD_REPOSITORY = {
      provide: 'UserRepository',
      inject: [AuthGuard],
      useFactory: () => {
        return new UserPool(dbProvider.useValue);
      },
    };

    export const USER_REPOSITORY = {
      provide: 'UserRepository',
      useExisting: 'UserRepository',
    };
  }
  export namespace USE_CASES {
    export const CREATE_USER_USE_CASE = {
      provide: CreateUserUseCase.UseCase,
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
      useFactory: (userRepository: UserRepository.Repository) => {
        return new CreateUserUseCase.UseCase(userRepository);
      },
    };

    export const LIST_USERS_USE_CASE = {
      provide: ListUsersUseCase.UseCase,
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
      useFactory: (userRepository: UserRepository.Repository) => {
        return new ListUsersUseCase.UseCase(userRepository);
      },
    };

    export const AUTH_USERS_USE_CASE = {
      provide: AuthUserUseCase.UseCase,
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
      useFactory: (userRepository: UserRepository.Repository) => {
        return new AuthUserUseCase.UseCase(userRepository);
      },
    };
  }
}
