import { Injectable, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { jwtHelper } from 'src/common/utils/jwt';

@Injectable()
export class IsAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization as string | undefined;
    const token = authHeader?.split(' ')[1];

    if (token) {
      const isVerified = jwtHelper.verify(token) as any;

      if (isVerified) {
        req.userId = isVerified?.id;
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
  }
}
