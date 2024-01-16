/* eslint-disable @typescript-eslint/no-namespace */
import { UserRepository, User } from '../../domain';
import { UnauthorizedException } from '@nestjs/common';
import { jwt } from '../../../../common/utils/jwt/gerate';
import { comparePassword } from '../../../../common/utils/jwt/comparePassword';

export namespace AuthUserUseCase {
  export class UseCase {
    constructor(private userRepo: UserRepository.Repository) {}

    async execute(input: Input): Promise<{ token: string; user: Output }> {
      const user = await this.userRepo.findByEmail(input.email);

      if (!user || !comparePassword(input.password, user.password)) {
        throw new UnauthorizedException('Credenciais inválidas');
      }

      const payload = { sub: user.id, email: user.email };
      const token = jwt.create(payload);

      return { token, user };
    }
  }

  export type Input = { email: string; password: string };

  export type Output = User | string;
}

export default AuthUserUseCase;
