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
import { PatientService } from './patient.service';
import response from 'src/common/utils/response';
import { messageUtil } from 'src/common/utils/message';
import type { Response } from 'express';
import { PateintDto } from './dto/patient.dto';

@Controller('api/patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  //Create
  @Post('create')
  async create(@Body() data: PateintDto, @Res() res: Response) {
    try {
      const patient = await this.patientService.create(data);
      return response.success(res, messageUtil.OK, patient);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
  //Read
  @Get('getall')
  async getAll(@Res() res: Response) {
    try {
      const patients = await this.patientService.findAll();
      return response.success(res, messageUtil.OK, patients);
    } catch (error) {
      return response.serverError(res, error);
    }
  }

  //Update
  @Put('update/:id')
  async update(
    @Body() data: PateintDto,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const doctor = await this.patientService.update(
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
      const patient = await this.patientService.delete(id);
      return response.success(res, messageUtil.OK, patient);
    } catch (error) {
      return response.serverError(res, error);
    }
  }
}
