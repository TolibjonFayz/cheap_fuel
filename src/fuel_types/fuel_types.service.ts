import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Fuel_Types } from './models/fuelTypes.models';
import { createFuel_typesDto } from './dto/createFuel_type.dto';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectModel(Fuel_Types) private fuel_typeRepo: typeof Fuel_Types,
  ) {}

  async createFuel_type(
    createFuel_typeDto: createFuel_typesDto,
  ): Promise<Fuel_Types> {
    const fuel_type = await this.fuel_typeRepo.create(createFuel_typeDto);
    return fuel_type;
  }

  async getAllFuel_type(): Promise<Fuel_Types[]> {
    const fuel_types = await this.fuel_typeRepo.findAll();
    return fuel_types;
  }
}
