import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Staff } from 'src/models/staff.model';
type StaffType = {
  name: string;
  email: string;
  password: string;
  designation: string;
  phone: string;
};

@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff) private readonly staffModel: typeof Staff) {}
  async create(data: StaffType): Promise<Staff> {
    return this.staffModel.create(data);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffModel.findAll();
  }

  async findOne(query: any): Promise<Staff | null> {
    return this.staffModel.findOne(query);
  }

  async findbyid(query: any): Promise<Staff | null> {
    return this.staffModel.findByPk(query);
  }

  async update(
    query: any,
    data: StaffType,
  ): Promise<[affectedCount: number, affectedRows: Staff[]]> {
    return this.staffModel.update(data, query);
  }

  async delete(id: string): Promise<void> {
    await this.staffModel.destroy({ where: { id } });
  }
}
