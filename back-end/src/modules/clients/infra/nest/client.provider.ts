/* eslint-disable @typescript-eslint/no-namespace */
import { ClientRepository } from '../../domain';
import { dbProvider } from '../../../../common/db';
import { PG_CONNECTION } from '../../../../common/constants';
import { ClientRepository as UserPool } from '../db/client.repository';
import {
  ListClientUseCase,
  CreateClientUseCase,
  UpdateClientUseCase,
  DeleteClientUseCase,
  StaticClientUseCase,
} from '../../application/use-case';

export namespace CLIENT_PROVIDERS {
  export namespace REPOSITORIES {
    export const CLIENT_POOL_REPOSITORY = {
      provide: 'ClientRepository',
      inject: [PG_CONNECTION],
      useFactory: () => {
        return new UserPool(dbProvider.useValue);
      },
    };

    export const CLIENT_REPOSITORY = {
      provide: 'ClientRepository',
      useExisting: 'ClientRepository',
    };
  }
  export namespace USE_CASES {
    export const CREATE_CLIENT_USE_CASE = {
      provide: CreateClientUseCase.UseCase,
      inject: [REPOSITORIES.CLIENT_REPOSITORY.provide],
      useFactory: (clientRepository: ClientRepository.Repository) => {
        return new CreateClientUseCase.UseCase(clientRepository);
      },
    };

    export const LIST_CLIENT_USE_CASE = {
      provide: ListClientUseCase.UseCase,
      inject: [REPOSITORIES.CLIENT_REPOSITORY.provide],
      useFactory: (clientRepository: ClientRepository.Repository) => {
        return new ListClientUseCase.UseCase(clientRepository);
      },
    };

    export const UPDATE_CLIENT_USE_CASE = {
      provide: UpdateClientUseCase.UseCase,
      inject: [REPOSITORIES.CLIENT_REPOSITORY.provide],
      useFactory: (clientRepository: ClientRepository.Repository) => {
        return new UpdateClientUseCase.UseCase(clientRepository);
      },
    };

    export const DELETE_CLIENT_USE_CASE = {
      provide: DeleteClientUseCase.UseCase,
      inject: [REPOSITORIES.CLIENT_REPOSITORY.provide],
      useFactory: (clientRepository: ClientRepository.Repository) => {
        return new DeleteClientUseCase.UseCase(clientRepository);
      },
    };

    export const STATIC_CLIENT_USE_CASE = {
      provide: StaticClientUseCase.UseCase,
      inject: [REPOSITORIES.CLIENT_REPOSITORY.provide],
      useFactory: (clientRepository: ClientRepository.Repository) => {
        return new StaticClientUseCase.UseCase(clientRepository);
      },
    };
  }
}
