import { Module } from '@nestjs/common';
import { EmployerRollService } from './employer_roll.service';
import { EmployerRollController } from './employer_roll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerRoll } from './entities/employer_roll.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmployerRoll])],
  controllers: [EmployerRollController],
  providers: [EmployerRollService]
})
export class EmployerRollModule {}
