import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'employer_roll'})
export class EmployerRoll {
    @PrimaryGeneratedColumn('uuid',{
        name:'employer_id'
    })
    employerRollId:string
    @Column({
        name:'employer_code',
        nullable:true

    })
    employerCode:string

    @Column({
        name:'employer_name'
    })
    employerName:String

    @Column({
        name:'employer_age'
    })
    employerAge:string

    @Column({
        name:'employer_department'
    })
    employerDepartment:string;

    @Column({
        name:'employer_salary'
    })
    employerSalary:string
}
