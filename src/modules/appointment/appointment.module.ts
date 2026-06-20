import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Appointment } from 'src/models/appointment.model';

@Module({
  imports: [SequelizeModule.forFeature([Appointment])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
