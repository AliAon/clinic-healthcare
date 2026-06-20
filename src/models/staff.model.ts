import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Staff extends Model {
  @Column({
    unique: true,
    allowNull: false,
  })
  declare name: string;
  @Column({
    unique: true,
    allowNull: false,
  })
  declare email: string;
  @Column({
    allowNull: false,
  })
  declare password: string;
  @Column({
    allowNull: false,
  })
  declare designation: string;
  @Column({
    allowNull: false,
  })
  declare phone: string;
}
