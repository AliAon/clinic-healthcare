import { IsNumber, IsString } from 'class-validator';

export class AppointmentDto {
  @IsString()
  name!: string;
  @IsString()
  phone!: string;
  @IsString()
  cnic!: string;
  @IsString()
  address!: string;
  @IsNumber()
  age!: number;
  @IsString()
  gender!: string;
  @IsNumber()
  doctorId!: number;
  @IsString()
  duration!: string;
  @IsString()
  date!: string;
  @IsString()
  timeSlot!: string;
}
