import {IsNotEmpty } from "class-validator";

export class CreateEmployerRollDto {
    @IsNotEmpty()
    employerCode:string
    @IsNotEmpty()
    employerName:string;
    @IsNotEmpty()
    employerAge:string;
    @IsNotEmpty()
    employerDeptartment:string;
    @IsNotEmpty()
    employerSalary:string;
}
