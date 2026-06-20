import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Doctor } from './doctor.model';

@Table
export class Appointment extends Model {
  @Column
  name!: string;

  @Column
  phone!: string;

  @Column
  cnic!: string;

  @Column
  address!: string;

  @Column
  age!: number;

  @Column
  gender!: string;

  @ForeignKey(() => Doctor)
  @Column
  doctorId!: number;

  @Column
  duration!: string;

  @Column
  date!: string;

  @Column
  timeSlot!: string;
}
