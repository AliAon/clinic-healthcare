import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Appointment } from 'src/models/appointment.model';
type AppointmentType = {
  name: String;
  phone: String;
  cnic: String;
  address: String;
  age: Number;
  gender: String;
  doctorId: Number;
  duration: String;
  date: String;
  timeSlot: String;
};

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment)
    private readonly doctorModel: typeof Appointment,
  ) {}

  async create(data: AppointmentType): Promise<Appointment> {
    return this.doctorModel.create(data);
  }

  async findAll(): Promise<Appointment[]> {
    return this.doctorModel.findAll();
  }

  async findOne(query: any): Promise<Appointment | null> {
    return this.doctorModel.findOne(query);
  }

  async findbyid(query: any): Promise<Appointment | null> {
    return this.doctorModel.findByPk(query);
  }

  async update(
    query: any,
    data: AppointmentType,
  ): Promise<[affectedCount: number, affectedRows: Appointment[]]> {
    return this.doctorModel.update(data, query);
  }

  async delete(id: string): Promise<void> {
    await this.doctorModel.destroy({ where: { id } });
  }
}
