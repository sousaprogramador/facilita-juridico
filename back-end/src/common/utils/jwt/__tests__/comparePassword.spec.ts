import * as bcrypt from 'bcrypt';
import { comparePassword } from '../comparePassword';

describe('YourFile', () => {
  describe('comparePassword', () => {
    const hashedPassword = bcrypt.hashSync('password123', 10);

    it('should return true for a correct password', () => {
      const candidatePassword = 'password123';
      const result = comparePassword(candidatePassword, hashedPassword);
      expect(result).toBe(true);
    });

    it('should return false for an incorrect password', () => {
      const candidatePassword = 'wrongpassword';
      const result = comparePassword(candidatePassword, hashedPassword);
      expect(result).toBe(false);
    });

    it('should return false for empty password', () => {
      const candidatePassword = '';
      const result = comparePassword(candidatePassword, hashedPassword);
      expect(result).toBe(false);
    });

    it('should return false for empty hashed password', () => {
      const candidatePassword = 'password123';
      const result = comparePassword(candidatePassword, '');
      expect(result).toBe(false);
    });
  });
});
