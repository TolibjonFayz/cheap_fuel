import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_station } from './models/gasstation.models';
import { createGasStationDto } from './dto/create_gasStation.dto';
import { UpdateGasStationDto } from './dto/update_gasStation.dto';

@Injectable()
export class GasStationService {
  constructor(
    @InjectModel(Gas_station) private gasStationRepo: typeof Gas_station,
  ) {}

  async createGasStation(
    createGasStationDto: createGasStationDto,
  ): Promise<Gas_station> {
    const gas_station = await this.gasStationRepo.create(createGasStationDto);
    return gas_station;
  }

  async getAllGasStation(): Promise<Gas_station[]> {
    const gasStations = await this.gasStationRepo.findAll();
    return gasStations;
  }

  async getGasStationById(id: number): Promise<Gas_station> {
    const gasStation = await this.gasStationRepo.findByPk(id);
    return gasStation;
  }

  async deleteGasStationById(id: number): Promise<number> {
    return this.gasStationRepo.destroy({ where: { id } });
  }

  async updateGasStation(
    id: number,
    updateGasStationDto: UpdateGasStationDto,
  ): Promise<Gas_station> {
    const gasStation = await this.gasStationRepo.update(updateGasStationDto, {
      where: { id },
      returning: true,
    });
    return gasStation[1][0].dataValues;
  }
}
