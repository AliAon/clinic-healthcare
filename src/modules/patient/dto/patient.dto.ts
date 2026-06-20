import { IsString } from 'class-validator';

export class PateintDto {
  @IsString()
  name!: string;

  @IsString()
  age!: number;

  @IsString()
  gender!: string;

  @IsString()
  email!: string;

  @IsString()
  phone!: string;

  @IsString()
  address!: string;

  @IsString()
  emergencyContact!: string;

  @IsString()
  insuranceProvider!: string;

  @IsString()
  insuranceNumber!: string;
}
