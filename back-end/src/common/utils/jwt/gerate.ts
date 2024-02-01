import envs from '../../../config/envs';
import * as jsonwebtoken from 'jsonwebtoken';

interface TokenPayload {
  email: string;
  name: string;
}

export const jwt = {
  create<T extends string | object | Buffer>(
    data: T,
    expiresIn = '15d',
    secret = '897da89sdnas9d81e1E!@41',
  ) {
    return jsonwebtoken.sign(data, secret, {
      expiresIn,
    });
  },
  decode(
    token: string,
    secret = envs().jwt.secret,
    options?: jsonwebtoken.VerifyOptions,
  ) {
    return jsonwebtoken.verify(token, secret, options) as TokenPayload;
  },
};
