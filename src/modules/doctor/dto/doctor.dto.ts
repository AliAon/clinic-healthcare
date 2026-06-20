import { IsString } from 'class-validator';

export class DoctorDto {
  @IsString()
  name!: string;

  @IsString()
  specialization!: string;

  @IsString({ each: true })
  services!: string[];

  @IsString()
  experience!: string;

  @IsString()
  education!: string;

  @IsString()
  email!: string;

  @IsString()
  phone!: string;

  @IsString()
  address!: string;

  @IsString()
  hospital_name!: string;

  @IsString()
  hospital_address!: string;

  @IsString()
  consulation_fee!: string;

  @IsString()
  bank_name!: string;

  @IsString()
  account_number!: string;

  @IsString({
    each: true,
  })
  permissions!: string[];
}
