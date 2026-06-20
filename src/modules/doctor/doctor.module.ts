import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from 'src/models/doctor.model';

@Module({
  imports: [SequelizeModule.forFeature([Doctor])],
  providers: [DoctorService],
  controllers: [DoctorController],
})
export class DoctorModule {}
