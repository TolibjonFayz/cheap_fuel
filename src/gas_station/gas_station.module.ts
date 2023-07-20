import { Module } from '@nestjs/common';
import { GasStationController } from './gas_station.controller';
import { GasStationService } from './gas_station.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_station } from './models/gasstation.models';

@Module({
  imports: [SequelizeModule.forFeature([Gas_station])], 
  controllers: [GasStationController],
  providers: [GasStationService],
})
export class GasStationModule {}
