import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import response from 'src/common/utils/response';
import { StaffService } from './staff.service';
import { messageUtil } from 'src/common/utils/message';
import type { Response } from 'express';
import { StaffDto } from './dto/staff.dto';

@Controller('api/staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}
  //Create
  @Post('create')
  async create(@Body() data: StaffDto, @Res() res: Response) {
    try {
      const patient = await this.staffService.create(data);
      return response.success(res, messageUtil.OK, patient);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
  //Read
  @Get('getall')
  async getAll(@Res() res: Response) {
    try {
      const patients = await this.staffService.findAll();
      return response.success(res, messageUtil.OK, patients);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  //Update
  @Put('update/:id')
  async update(
    @Body() data: StaffDto,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const doctor = await this.staffService.update(
        {
          where: {
            id: id,
          },
        },
        data,
      );
      if (!doctor) {
        return response.notFound(res, messageUtil.NOT_FOUND);
      }
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
  //Delete
  @Delete('delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    try {
      const patient = await this.staffService.delete(id);
      return response.success(res, messageUtil.OK, patient);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
}
