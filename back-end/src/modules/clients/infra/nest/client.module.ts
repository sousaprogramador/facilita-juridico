import { Module } from '@nestjs/common';
import { CLIENT_PROVIDERS } from './client.provider';
import { ClientController } from './client.controller';
import { dbModule } from '../../../../common/db';

@Module({
  imports: [dbModule],
  controllers: [ClientController],
  providers: [
    CLIENT_PROVIDERS.REPOSITORIES.CLIENT_POOL_REPOSITORY,
    ...Object.values(CLIENT_PROVIDERS.USE_CASES),
  ],
})
export class ClientModule { }
