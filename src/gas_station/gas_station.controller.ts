import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { createGasStationDto } from './dto/create_gasStation.dto';
import { Gas_station } from './models/gasstation.models';
import { UpdateGasStationDto } from './dto/update_gasStation.dto';

@Controller('gas-station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Post('create')
  async createGasStation(@Body() createGasStationDto: createGasStationDto) {
    return this.gasStationService.createGasStation(createGasStationDto);
  }

  @Get('all')
  async getAllGasStations(): Promise<Gas_station[]> {
    return this.gasStationService.getAllGasStation();
  }

  @Get(':id')
  async getGasStationById(@Param('id') id: string): Promise<Gas_station> {
    return this.gasStationService.getGasStationById(+id);
  }

  @Delete(':id')
  async deleteGasStationById(@Param('id') id: string): Promise<number> {
    return this.gasStationService.deleteGasStationById(+id);
  }

  @Put(':id')
  async updateGasStation(
    @Param('id') id: string,
    @Body() UpdateGasStationDto: UpdateGasStationDto,
  ): Promise<Gas_station> {
    return this.gasStationService.updateGasStation(+id, UpdateGasStationDto);
  }
}
