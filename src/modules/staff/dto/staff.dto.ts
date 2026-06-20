import { IsString } from 'class-validator';

export class StaffDto {
  @IsString()
  name!: string;

  @IsString()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  designation!: string;

  @IsString()
  phone!: string;
}
