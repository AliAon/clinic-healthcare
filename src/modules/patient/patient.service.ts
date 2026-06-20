import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from 'src/models/patient.model';
type PatientType = {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  emergencyContact: string;
  insuranceProvider: string;
  insuranceNumber: string;
};

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
  ) {}

  async create(data: PatientType): Promise<Patient> {
    return this.patientModel.create(data);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.findAll();
  }

  async findOne(query: any): Promise<Patient | null> {
    return this.patientModel.findOne(query);
  }

  async findbyid(query: any): Promise<Patient | null> {
    return this.patientModel.findByPk(query);
  }

  async update(
    query: any,
    data: PatientType,
  ): Promise<[affectedCount: number, affectedRows: Patient[]]> {
    return this.patientModel.update(data, query);
  }

  async delete(id: string): Promise<void> {
    await this.patientModel.destroy({ where: { id } });
  }
}
