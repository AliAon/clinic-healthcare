import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from 'src/models/doctor.model';
type DoctorType = {
  name: string;
  specialization: string;
  services: string[];
  education: string;
  experience: string;
  email: string;
  phone: string;
  address: string;
  hospital_name: string;
  hospital_address: string;
  consulation_fee: string;
  bank_name: string;
  account_number: string;
};

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor)
    private readonly doctorModel: typeof Doctor,
  ) {}

  async create(data: DoctorType): Promise<Doctor> {
    return this.doctorModel.create(data);
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.findAll();
  }

  async findOne(query: any): Promise<Doctor | null> {
    return this.doctorModel.findOne(query);
  }

  async findbyid(query: any): Promise<Doctor | null> {
    return this.doctorModel.findByPk(query);
  }

  async update(
    query: any,
    data: DoctorType,
  ): Promise<[affectedCount: number, affectedRows: Doctor[]]> {
    return this.doctorModel.update(data, query);
  }

  async delete(id: string): Promise<void> {
    await this.doctorModel.destroy({ where: { id } });
  }
}
