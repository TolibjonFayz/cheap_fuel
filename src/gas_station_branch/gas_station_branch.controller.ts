import { Body, Controller, Get, Post } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { createGasStationBranchDto } from './dto/createGas_station_brach.dto';
import { Gas_station_branch } from './models/gas_station_branch.models';

@Controller('gas-station-branch')
export class GasStationBranchController {
  constructor(
    private readonly gasStationBranchService: GasStationBranchService,
  ) {}

  @Post('create')
  async createGasStationBranch(
    @Body() createGasStationBranchDto: createGasStationBranchDto,
  ) {
    return this.gasStationBranchService.createGasStationBranch(
      createGasStationBranchDto,
    );
  }

  @Get('all')
  async getAllGasStations(): Promise<Gas_station_branch[]> {
    return this.gasStationBranchService.getAllGasStationBranch();
  }
}
