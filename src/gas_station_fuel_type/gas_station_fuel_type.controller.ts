import { Body, Controller, Get, Post } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { createGasStationFuelTypeDto } from './dto/createGasStationFuelType.dto';
import { Gas_station_fuel_type } from './models/gasStationFuelType.model';

@Controller('gas-station-fuel-type')
export class GasStationFuelTypeController {
  constructor(
    private readonly gasStationFuelTypeService: GasStationFuelTypeService,
  ) {}

  @Post('create')
  async createGasStationFuelType(
    @Body() createGasStationFuelTypeDto: createGasStationFuelTypeDto,
  ) {
    return this.gasStationFuelTypeService.createGasStationFuelType(
      createGasStationFuelTypeDto,
    );
  }

  @Get('all')
  async getAllGasStationFuelTypes(): Promise<Gas_station_fuel_type[]> {
    return this.gasStationFuelTypeService.getAllGasStationFuelType();
  }
}
