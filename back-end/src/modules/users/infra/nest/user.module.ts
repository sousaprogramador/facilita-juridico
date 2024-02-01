import { Module } from '@nestjs/common';
import { USER_PROVIDERS } from './user.provider';
import { dbModule } from '../../../../common/db';
import { UserController } from './user.controller';

@Module({
  imports: [dbModule],
  controllers: [UserController],
  providers: [
    USER_PROVIDERS.REPOSITORIES.USER_POOL_REPOSITORY,
    ...Object.values(USER_PROVIDERS.USE_CASES),
  ],
})
export class UserModule {}
