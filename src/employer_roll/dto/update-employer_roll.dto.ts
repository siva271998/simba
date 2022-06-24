import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployerRollDto } from './create-employer_roll.dto';

export class UpdateEmployerRollDto extends CreateEmployerRollDto {
    employerRollId:string
}
