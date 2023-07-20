import { Module } from '@nestjs/common';
import { FuelTypesController } from './fuel_types.controller';
import { FuelTypesService } from './fuel_types.service';
import { Fuel_Types } from './models/fuelTypes.models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Fuel_Types])],
  controllers: [FuelTypesController],
  providers: [FuelTypesService],
})
export class FuelTypesModule {}
