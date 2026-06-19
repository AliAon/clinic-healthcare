import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { Response, Request } from 'express';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('getall')
  getAll(@Res() res: Response) {
    try {
      return res.status(200).json({
        message: 'success',
        data: this.usersService.findAll(),
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error',
      });
    }
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      this.usersService.create(createUserDto);
      return res.status(201).json({
        message: 'success',
        data: createUserDto,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error',
      });
    }
  }

  @Get('getbyid/:id')
  getOne(@Res() res: Response, @Req() req: Request) {
    try {
      const { id } = req.params;
      const user = this.usersService.findOne(id);
      return res.status(200).json({
        message: 'success',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error',
      });
    }
  }
  @Put('update/:id')
  update(
    @Res() res: Response,
    @Req() req: Request,
    @Body() createUserDto: CreateUserDto,
  ) {
    const { id } = req.params;
    const user = this.usersService.update(id, createUserDto);
    try {
      return res.status(200).json({
        message: 'success',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error',
      });
    }
  }

  @Delete('delete/:id')
  remove(@Res() res: Response, @Req() req: Request) {
    const { id } = req.params;
    this.usersService.remove(id);
    try {
      return res.status(200).json({
        message: 'success',
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error',
      });
    }
  }
}
