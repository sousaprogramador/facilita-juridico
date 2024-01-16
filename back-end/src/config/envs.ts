export default () => ({
  database: {
    port: 5432,
    user: 'admin',
    uri: 'localhost',
    dbName: 'roteirizador',
    password: 'roteirizador123',
  },
  jwt: {
    secret: '897da89sdnas9d81e1E!@41',
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
});
