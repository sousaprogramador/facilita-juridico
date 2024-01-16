import { jwt } from '../gerate';
import envs from '../../../../config/envs';
import * as jsonwebtoken from 'jsonwebtoken';

describe('YourFile', () => {
  describe('jwt', () => {
    const mockData = { name: 'Test User', email: 'test@example.com' };
    const mockToken = jwt.create(mockData);

    it('should create a valid JWT token', () => {
      const decoded = jwt.decode(mockToken, envs().jwt.secret);

      expect(decoded).toEqual({
        ...mockData,
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });

    it('should decode a valid JWT token', () => {
      const decoded = jwt.decode(mockToken, envs().jwt.secret);

      expect(decoded).toEqual({
        ...mockData,
        iat: expect.any(Number),
        exp: expect.any(Number),
      });
    });

    it('should handle token expiration', () => {
      const expiredToken = jwt.create(mockData, '-1s');

      expect(() => jwt.decode(expiredToken, envs().jwt.secret)).toThrow(
        jsonwebtoken.TokenExpiredError,
      );
    });

    it('should handle invalid token signature', () => {
      const tamperedToken = jwt.create(mockData, '1d', 'different-secret');

      expect(() => jwt.decode(tamperedToken, envs().jwt.secret)).toThrow(
        jsonwebtoken.JsonWebTokenError,
      );
    });

    it('should handle invalid token format', () => {
      const invalidFormatToken = 'invalid-token-format';

      expect(() => jwt.decode(invalidFormatToken, envs().jwt.secret)).toThrow(
        jsonwebtoken.JsonWebTokenError,
      );
    });
  });
});
