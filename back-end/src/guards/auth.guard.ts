import { jwt } from '../common/utils';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers) return false;

    const { authorization } = request.headers;
    if (!authorization) throw new UnauthorizedException('Permissão negada.');

    const [type, token] = authorization.split(' ');
    if (!type || type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Permissão negada.');
    }

    try {
      const decoded = jwt.decode(token);

      if (!decoded) throw new UnauthorizedException('token invalid');

      return true;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException('token invalid');
    }
  }
}
