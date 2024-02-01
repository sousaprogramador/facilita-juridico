import { Pool } from 'pg';
import { Injectable } from '@nestjs/common';
import { calculateDistanceToOrigin } from 'src/common/utils/calculateDistance';
import {
  Client,
  ClientRepository as ClientRepositoryContract,
} from '../../domain';

@Injectable()
export class ClientRepository implements ClientRepositoryContract.Repository {
  constructor(private conn: Pool) {}

  async create(entity: Client): Promise<Client | string> {
    try {
      const result = await this.conn.query(
        'INSERT INTO clients (id, name, email, phone, cep, address, state, city, complement, cood_x, cood_y, created_at, updated_at) VALUES ($1, $2, $3, $4 ,$5, $6, $7, $8, $9, $10 ,$11, $12, $13) RETURNING *',
        [
          entity.props.id,
          entity.props.name,
          entity.props.email,
          entity.props.phone,
          entity.props.cep,
          entity.props.address,
          entity.props.state,
          entity.props.city,
          entity.props.complement,
          entity.props.latitude,
          entity.props.longitude,
          entity.props.createdAt,
          entity.props.updatedAt,
        ],
      );
      return result.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }

  async findAll(): Promise<{ rows: Client[]; count: number }> {
    try {
      const result = await this.conn.query(
        `SELECT clients.*, clients.cood_x AS latitude, clients.cood_y AS longitude, TO_CHAR(clients.created_at, 'DD/MM/YYYY HH24:MI') AS created_at_formatted FROM clients ORDER BY clients.created_at DESC;`,
      );
      return { rows: result.rows, count: result.rowCount };
    } catch (error) {
      console.log(error);
    }
  }

  async static(): Promise<any> {
    try {
      const result = await this.conn.query(
        `SELECT clients.name, clients.cood_x AS latitude, clients.cood_y AS longitude FROM clients ORDER BY cood_x, cood_y;`,
      );
      const count = await this.conn.query(
        `SELECT COUNT(*) as totalClients FROM clients`,
      );
      const data = result.rows.map((c) => ({
        ...c,
        distance: calculateDistanceToOrigin(c.latitude, c.longitude),
      }));
      const sumDistances = data.reduce((sum, point) => sum + point.distance, 0);
      const rows = data
        .sort((a, b) => a.distance - b.distance)
        .map((r) => ({ ...r, distance: r.distance.toFixed(2) }));

      return {
        rows,
        totalClients: count.rows[0]?.totalclients,
        sum: sumDistances.toFixed(2),
      };
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    await this.conn.query(`DELETE FROM clients WHERE id = '${id}'`);
  }

  async findById(id: string): Promise<Client> {
    return null;
  }

  async update(id: string, data: Client): Promise<string | any> {
    try {
      const {
        name,
        email,
        phone,
        cep,
        address,
        state,
        city,
        complement,
        latitude,
        longitude,
      } = data;

      const result = await this.conn.query(
        'UPDATE public.clients SET ' +
          '"name" = $1, ' +
          'email = $2, ' +
          'phone = $3, ' +
          'cep = $4, ' +
          '"address" = $5, ' +
          '"state" = $6, ' +
          'city = $7, ' +
          'complement = $8, ' +
          'cood_x = $9, ' +
          'cood_y = $10, ' +
          'updated_at = CURRENT_TIMESTAMP ' +
          'WHERE id = $11 ' +
          'RETURNING *',
        [
          name,
          email,
          phone,
          cep,
          address,
          state,
          city,
          complement,
          latitude,
          longitude,
          id,
        ],
      );

      return { ok: true, row: result.rows.length ? result.rows[0] : {} };
    } catch (error) {
      console.log(error);
    }
  }
}
