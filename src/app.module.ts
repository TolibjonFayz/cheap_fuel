import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Gas_station } from './gas_station/models/gasstation.models';
import { GasStationModule } from './gas_station/gas_station.module';
import { FuelTypesModule } from './fuel_types/fuel_types.module';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { Fuel_Types } from './fuel_types/models/fuelTypes.models';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Gas_station, Fuel_Types],
      autoLoadModels: true,
      logging: true,
    }),
    GasStationModule,
    FuelTypesModule,
    GasStationBranchModule,
    GasStationFuelTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
