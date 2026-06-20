import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Staff } from 'src/models/staff.model';

@Module({
  imports: [SequelizeModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
