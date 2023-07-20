import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface gasStationFuelTypeAtr {
  gas_station_branch_id: number;
  fuel_type_id: number;
  price: number;
  is_bor: boolean;
}

@Table({ tableName: 'gas_station_fuel_type' })
export class Gas_station_fuel_type extends Model<
  Gas_station_fuel_type,
  gasStationFuelTypeAtr
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gas_station_branch_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fuel_type_id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_bor: string;
}
