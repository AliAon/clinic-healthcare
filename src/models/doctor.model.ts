import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Doctor extends Model {
  @Column
  name!: string;

  @Column
  specialization!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  services!: string[];

  @Column
  education!: string;

  @Column
  experience!: string;

  @Column
  email!: string;

  @Column
  phone!: string;

  @Column
  address!: string;

  @Column
  hospital_name!: string;

  @Column
  hospital_address!: string;

  @Column
  consulation_fee!: string;

  @Column
  bank_name!: string;

  @Column
  account_number!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  permissions!: string[];
}
