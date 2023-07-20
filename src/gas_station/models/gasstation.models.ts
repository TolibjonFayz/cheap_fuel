import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface gasStationAtr {
  main_gas_station_name: string;
}

@Table({ tableName: 'gas_station' })
export class Gas_station extends Model<Gas_station, gasStationAtr> {
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
  main_gas_station_name: string;
}
