import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
  database: {
    port: process.env.PORT_DB || 5432,
    user: process.env.POSTGRES_USER,
    uri: process.env.DATABASE_URL,
    dbName: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  },
  jwt: {
    secret: process.env.SECRET_KEY || '897da89sdnas9d81e1E!@41',
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
});
