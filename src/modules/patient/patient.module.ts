import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from 'src/models/patient.model';
import { PatientService } from './patient.service';

@Module({
  imports: [SequelizeModule.forFeature([Patient])],
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
