import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';

class TokenHelper {
  issue(
    payload: object,
    expiresIn: SignOptions['expiresIn'] = '1d',
  ): string | false {
    try {
      return jwt.sign(payload, process.env.SECRETKEY as string, {
        expiresIn,
        algorithm: 'HS256',
      });
    } catch (error) {
      return false;
    }
  }

  verify(token: string): jwt.JwtPayload | string | false {
    try {
      return jwt.verify(token, process.env.SECRETKEY as string);
    } catch (error) {
      return false;
    }
  }
}

export const jwtHelper = new TokenHelper();
