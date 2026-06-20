import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { messageUtil } from 'src/common/utils/message';
import { AuthService } from './auth.service';
import { comparePassword, hashPassword } from 'src/common/utils/password';
import { jwtHelper } from 'src/common/utils/jwt';
import type { Response } from 'express';
import response from 'src/common/utils/response';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Res() res: Response, @Body() body: SignupDto) {
    const { username, email, password } = body;
    try {
      //validate input
      if (!email || !password || !username) {
        return response.badRequest(res, messageUtil.EMPTY_FIELD);
      }

      //Check user with this email already exist
      const existingUser = await this.authService.findOne({
        where: {
          email: email,
        },
      });
      if (existingUser) {
        return response.ExistallReady(res, messageUtil.ALL_READY_EXIST);
      }

      //Hash Password
      const hashedPassword = await hashPassword(password);

      //Create user and save into db
      const newUser = await this.authService.create({
        username: username,
        email: email,
        password: hashedPassword as string,
      });
      console.log('newUser', newUser);

      //jwt
      const token = await jwtHelper.issue({ id: newUser.dataValues.id });

      return response.success(
        res,
        messageUtil.USER_CREATED,
        {
          id: newUser.dataValues.id,
          username: newUser.dataValues.username,
          email: newUser.dataValues.email,
        },
        token,
      );
    } catch (error) {
      console.error(error);
      return response.serverError(res, error);
    }
  }

  @Post('login')
  async login(@Res() res: Response, @Body() body: LoginDto) {
    const { email, password } = body;

    try {
      //validate input
      if (!email || !password) {
        return response.badRequest(res, messageUtil.EMPTY_FIELD);
      }

      //Check user with this email exist
      const user = await this.authService.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return response.notFound(res, messageUtil.NOT_FOUND);
      }

      //compare password

      const isMatched = await comparePassword(
        password,
        user.dataValues.password,
      );
      if (!isMatched) {
        return response.authorizationError(res, messageUtil.INCORRECT_PASSWORD);
      }

      //jwt
      const token = await jwtHelper.issue({ id: user.dataValues.id });

      return response.success(
        res,
        messageUtil.LOGIN_SUCCESS,
        {
          id: user.dataValues.id,
          username: user.dataValues.username,
          email: user.dataValues.email,
        },
        token,
      );
    } catch (error) {
      console.error(error);
      return response.serverError(res, error);
    }
  }
}
