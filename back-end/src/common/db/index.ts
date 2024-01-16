import { Pool } from 'pg';
import envs from 'src/config/envs';
import { Module } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';

export const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: envs().database.user,
    host: envs().database.uri,
    database: envs().database.dbName,
    password: envs().database.password,
    port: envs().database.port,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class dbModule {}
