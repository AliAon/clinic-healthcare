import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserType } from '../auth/auth.service';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(query?: any): Promise<User[]> {
    return this.userModel.findAll(query);
  }

  async findOne(query: any): Promise<User | null> {
    return this.userModel.findOne(query);
  }

  async findbyid(query: any): Promise<User | null> {
    return this.userModel.findByPk(query);
  }

  async update(
    query: any,
    data: UserType,
  ): Promise<[affectedCount: number, affectedRows: User[]]> {
    return this.userModel.update(data, query);
  }

  async delete(id: number): Promise<number> {
    return await this.userModel.destroy({ where: { id } });
  }
}
