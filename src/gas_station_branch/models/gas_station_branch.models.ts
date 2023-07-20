import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface gasStationBranchAtr {
  gas_station_branch_id: number;
  branch_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'gas_station_branch' })
export class Gas_station_branch extends Model<
  Gas_station_branch,
  gasStationBranchAtr
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
  gas_station_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  branch_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;
}