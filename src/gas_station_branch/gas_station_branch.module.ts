import { Module } from '@nestjs/common';
import { GasStationBranchController } from './gas_station_branch.controller';
import { GasStationBranchService } from './gas_station_branch.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_station_branch } from './models/gas_station_branch.models';

@Module({
  imports: [SequelizeModule.forFeature([Gas_station_branch])],
  controllers: [GasStationBranchController],
  providers: [GasStationBranchService],
})
export class GasStationBranchModule {}
