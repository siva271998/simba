import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from 'src/config/response';
import { DeleteResult, Repository } from 'typeorm';
import { CreateEmployerRollDto } from './dto/create-employer_roll.dto';
import { UpdateEmployerRollDto } from './dto/update-employer_roll.dto';
import { EmployerRoll } from './entities/employer_roll.entity';

@Injectable()
export class EmployerRollService {
  constructor(@InjectRepository(EmployerRoll) private employerRollRepository: Repository<EmployerRoll>) { }

  async create(createEmployerRollDto: CreateEmployerRollDto):Promise<ApiResponse<EmployerRoll>> {
   let employer_roll = new EmployerRoll()
   let employer_code_exict = await this.employerRollRepository.findOne({where:{employerCode:createEmployerRollDto.employerCode}})
   if(employer_code_exict){
    let response:ApiResponse<EmployerRoll> = {
      status:ApiResponseStatus.ERROR,
      error:{
        type:ErrorMessageType.ERROR,
        message:`The ${createEmployerRollDto.employerCode} is already exists`
      }          
    };
    return response;
   }
   employer_roll.employerCode = createEmployerRollDto.employerCode
   employer_roll.employerName = createEmployerRollDto.employerName
   employer_roll.employerAge  = createEmployerRollDto.employerAge
   employer_roll.employerDepartment = createEmployerRollDto.employerDeptartment
   employer_roll.employerSalary = createEmployerRollDto.employerSalary

   let saved_employer_roll =await this.employerRollRepository.save(employer_roll)
   let response: ApiResponse<EmployerRoll> = {
    status: ApiResponseStatus.SUCCESS,
    data: saved_employer_roll
  };
  return response;

  }

  async findAll():Promise<ApiResponse<EmployerRoll[]>> {
    let employer_roll = await this.employerRollRepository.find()
    let response: ApiResponse<EmployerRoll[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: employer_roll
    };
    return response;
  }

  async findId(id: string):Promise<ApiResponse<EmployerRoll>> {
    let employer_roll_result = await this.employerRollRepository.findOne({ where: { employerRollId: id } });
    let response: ApiResponse<EmployerRoll> = {
      status: ApiResponseStatus.SUCCESS,
      data: employer_roll_result
    };
    return response;
  }

  async update(updateEmployerRollDto: UpdateEmployerRollDto):Promise<ApiResponse<EmployerRoll>>{  
  let employer_roll_result = await this.employerRollRepository.findOne({where:{employerRollId:updateEmployerRollDto.employerRollId}})
  let employer_roll_data = {...employer_roll_result,...updateEmployerRollDto}
  employer_roll_data.employerCode = updateEmployerRollDto.employerCode
  employer_roll_data.employerName = updateEmployerRollDto.employerName
  employer_roll_data.employerAge = updateEmployerRollDto.employerAge
  employer_roll_data.employerDeptartment = updateEmployerRollDto.employerDeptartment
  employer_roll_data.employerSalary = updateEmployerRollDto.employerSalary
  let updated_employer_roll = await this.employerRollRepository.save(employer_roll_data)
  let response: ApiResponse<EmployerRoll> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_employer_roll
    };
    return response;
  }

  async remove(id: string):Promise<ApiResponse<DeleteResult>> {
    let response: DeleteResult = await this.employerRollRepository.delete({ employerRollId: id });
    let result: ApiResponse<DeleteResult> = {
      status: ApiResponseStatus.SUCCESS,
      data: response
    };
    return result;
  }
}
