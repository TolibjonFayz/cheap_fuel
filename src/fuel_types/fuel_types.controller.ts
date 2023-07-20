import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { FuelTypesService } from './fuel_types.service';
import { createFuel_typesDto } from './dto/createFuel_type.dto';
import { Fuel_Types } from './models/fuelTypes.models';

@Controller('fuel-types')
export class FuelTypesController {
  constructor(private readonly fuel_typeService: FuelTypesService) {}

  @Post('create')
  async createFuel_type(@Body() createFuel_typesDto: createFuel_typesDto) {
    return this.fuel_typeService.createFuel_type(createFuel_typesDto);
  }

  @Get('all')
  async getAllFuel_types(): Promise<Fuel_Types[]> {
    return this.fuel_typeService.getAllFuel_type();
  }
}
