import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { getAuthBearerToken } from 'src/common/utils/helper';
import { jwtHelper } from 'src/common/utils/jwt';

@Injectable()
export class IsAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = getAuthBearerToken(req);
    if (token) {
      const isVerified = jwtHelper.verify(token);
      if (isVerified) {
        // req.userId = isVerified.id;
        next();
      } else {
        return res.status(401).json({
          success: 'false',
          message: 'Token is not valid',
        });
      }
    } else {
      return res.status(401).json({
        success: 'false',
        message: 'Token is not provided',
        missingParameters: ['login_token'],
      });
    }
    next();
  }
}
