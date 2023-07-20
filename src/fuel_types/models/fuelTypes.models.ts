import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface fuel_typesAtr {
  name: string;
}

@Table({ tableName: 'fuel_types' })
export class Fuel_Types extends Model<Fuel_Types, fuel_typesAtr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
