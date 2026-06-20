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
import { AppointmentService } from './appointment.service';
import response from 'src/common/utils/response';
import { messageUtil } from 'src/common/utils/message';
import { AppointmentDto } from './dto/appointment.dto';
import type { Response } from 'express';

@Controller('api/appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('create')
  async create(@Body() data: AppointmentDto, @Res() res: Response) {
    try {
      const doctor = await this.appointmentService.create(data);
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  @Get('getall')
  async findAll(@Res() res: Response) {
    try {
      const doctors = await this.appointmentService.findAll();
      return response.success(res, messageUtil.OK, doctors);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  @Put('update/:id')
  async update(
    @Body() data: AppointmentDto,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const doctor = await this.appointmentService.update(
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

  @Get('getbyid/:id')
  async findById(@Res() res: Response, @Param('id') id: string) {
    try {
      const doctor = await this.appointmentService.findbyid(id);
      if (!doctor) {
        return response.notFound(res, messageUtil.NOT_FOUND);
      }
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  @Delete('delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    try {
      const doctor = await this.appointmentService.delete(id);
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
}
