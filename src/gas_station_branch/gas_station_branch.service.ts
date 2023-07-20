import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gas_station_branch } from './models/gas_station_branch.models';
import { createGasStationBranchDto } from './dto/createGas_station_brach.dto';

@Injectable()
export class GasStationBranchService {
  constructor(
    @InjectModel(Gas_station_branch)
    private gasStationBranchRepo: typeof Gas_station_branch,
  ) {}

  //post GSB
  async createGasStationBranch(
    createGasStationBranchDto: createGasStationBranchDto,
  ): Promise<Gas_station_branch> {
    const gas_station_branch = await this.gasStationBranchRepo.create(
      createGasStationBranchDto,
    );
    return gas_station_branch;
  }

  //get all GSB
  async getAllGasStationBranch(): Promise<Gas_station_branch[]> {
    const gasStationBranchs = await this.gasStationBranchRepo.findAll();
    return gasStationBranchs;
  }
}
