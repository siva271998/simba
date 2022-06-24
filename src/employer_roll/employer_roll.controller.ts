import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployerRollService } from './employer_roll.service';
import { CreateEmployerRollDto } from './dto/create-employer_roll.dto';
import { UpdateEmployerRollDto } from './dto/update-employer_roll.dto';
import { EmployerRoll } from './entities/employer_roll.entity';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';

@Controller('employer_roll')
export class EmployerRollController {
  constructor(private readonly employerRollService: EmployerRollService) {}

  @Post('create')
  create(@Body() createEmployerRollDto: CreateEmployerRollDto):Promise<ApiResponse<EmployerRoll>> {
    return this.employerRollService.create(createEmployerRollDto);
  }

  @Post('findAll')
  findAll():Promise<ApiResponse<EmployerRoll[]>> {
    return this.employerRollService.findAll();
  }

  @Post('findOne')
  findOne(@Body('employerRollId') id: string):Promise<ApiResponse<EmployerRoll>> {
    return this.employerRollService.findId(id);
  }

  @Post('update')
  update(@Body() updateEmployerRollDto: UpdateEmployerRollDto):Promise<ApiResponse<EmployerRoll>> {
    return this.employerRollService.update(updateEmployerRollDto);
  }

  @Post('delete')
  remove(@Body('employerRollId') id: string):Promise<ApiResponse<DeleteResult>> {
    return this.employerRollService.remove(id);
  }
}
