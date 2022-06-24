import { Test, TestingModule } from '@nestjs/testing';
import { EmployerRollController } from './employer_roll.controller';
import { EmployerRollService } from './employer_roll.service';

describe('EmployerRollController', () => {
  let controller: EmployerRollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployerRollController],
      providers: [EmployerRollService],
    }).compile();

    controller = module.get<EmployerRollController>(EmployerRollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
