import { Body, Controller, Delete, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import type { Response, Request } from 'express';
import response from 'src/common/utils/response';
import { messageUtil } from 'src/common/utils/message';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('getall')
  async getAll(@Res() res: Response) {
    try {
      const allUser = await this.usersService.findAll();
      console.log('allUser', allUser);
      if (!allUser) {
        return response.notFound(res, messageUtil.NOT_FOUND);
      }
      return response.success(res, messageUtil.OK, allUser);
    } catch (error) {
      console.error(error);
      return response.serverError(res, error);
    }
  }
}
