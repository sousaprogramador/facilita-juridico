import { Pool } from 'pg';
import { Injectable } from '@nestjs/common';
import { User, UserRepository as UserRepositoryContract } from '../../domain';

@Injectable()
export class UserRepository implements UserRepositoryContract.Repository {
  constructor(private conn: Pool) {}

  async create(entity: User): Promise<User | string> {
    try {
      const result = await this.conn.query(
        'INSERT INTO users (id, name, email, password,created_at,updated_at ) VALUES ($1, $2, $3, $4 ,$5,$6) RETURNING *',
        [
          entity.props.id,
          entity.props.name,
          entity.props.email,
          entity.props.password,
          entity.props.createdAt,
          entity.props.updatedAt,
        ],
      );
      return result.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const result = await this.conn.query('SELECT * FROM users');
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {}

  async findById(id: string): Promise<User> {
    return null;
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const result = await this.conn.query(
        `SELECT * FROM users WHERE email= '${email}'`,
      );

      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async update(data: User): Promise<string | void> {}
}
