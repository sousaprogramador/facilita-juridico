/* eslint-disable @typescript-eslint/no-namespace */
import { Client, ClientRepository } from '../../domain';
import { NotFoundException } from '@nestjs/common';

export namespace UpdateClientUseCase {
  export class UseCase {
    constructor(private userRepo: ClientRepository.Repository) { }

    async execute(id: string, data: Client): Promise<Output | any> {
      const updatedClientDone = await this.userRepo.update(id, data);

      if (!updatedClientDone) {
        throw new NotFoundException('Cliente não encontrado');
      }

      return updatedClientDone;
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

  export type Output = { ok: boolean, row: Input };
}

export default UpdateClientUseCase;
