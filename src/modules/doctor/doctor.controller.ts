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
import { DoctorService } from './doctor.service';
import { DoctorDto } from './dto/doctor.dto';
import { messageUtil } from 'src/common/utils/message';
import response from 'src/common/utils/response';
import type { Response } from 'express';

@Controller('api/doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post('create')
  async create(@Body() data: DoctorDto, @Res() res: Response) {
    try {
      const doctor = await this.doctorService.create(data);
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  @Get('getall')
  async findAll(@Res() res: Response) {
    try {
      const doctors = await this.doctorService.findAll();
      return response.success(res, messageUtil.OK, doctors);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  @Put('update/:id')
  async update(
    @Body() data: DoctorDto,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const doctor = await this.doctorService.update(
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
      const doctor = await this.doctorService.findbyid(id);
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
      const doctor = await this.doctorService.delete(id);
      return response.success(res, messageUtil.OK, doctor);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
}
