import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_station_fuel_type } from './models/gasStationFuelType.model';
import { createGasStationFuelTypeDto } from './dto/createGasStationFuelType.dto';

@Injectable()
export class GasStationFuelTypeService {
  constructor(
    @InjectModel(Gas_station_fuel_type)
    private gasStationFuelTypeRepo: typeof Gas_station_fuel_type,
  ) {}

  //post GSFT
  async createGasStationFuelType(
    createGasStationFuelTypeDto: createGasStationFuelTypeDto,
  ): Promise<Gas_station_fuel_type> {
    const gas_station_branch = await this.gasStationFuelTypeRepo.create(
      createGasStationFuelTypeDto,
    );
    return gas_station_branch;
  }

  //get all GSFT
  async getAllGasStationFuelType(): Promise<Gas_station_fuel_type[]> {
    const gasStationFuelTypes = await this.gasStationFuelTypeRepo.findAll();
    return gasStationFuelTypes;
  }
}
