import * as bcrypt from 'bcrypt';

export const comparePassword = (
  candidatePassword: string,
  password: string,
) => {
  return bcrypt.compareSync(candidatePassword, password);
};
