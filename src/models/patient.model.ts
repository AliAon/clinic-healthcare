import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Patient extends Model {
  @Column({
    unique: true,
    allowNull: false,
  })
  name!: string;

  @Column({
    allowNull: false,
  })
  age!: number;

  @Column({
    allowNull: false,
  })
  gender!: string;

  @Column({
    allowNull: false,
  })
  email!: string;

  @Column({
    allowNull: false,
  })
  phone!: string;

  @Column({
    allowNull: false,
  })
  address!: string;

  @Column({
    allowNull: false,
  })
  emergencyContact!: string;

  @Column({
    allowNull: false,
  })
  insuranceProvider!: string;

  @Column({
    allowNull: false,
  })
  insuranceNumber!: string;
}
