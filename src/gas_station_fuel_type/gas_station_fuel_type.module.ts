import { Module } from '@nestjs/common';
import { GasStationFuelTypeController } from './gas_station_fuel_type.controller';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_station_fuel_type } from './models/gasStationFuelType.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_station_fuel_type])],
  controllers: [GasStationFuelTypeController],
  providers: [GasStationFuelTypeService],
})
export class GasStationFuelTypeModule {}
