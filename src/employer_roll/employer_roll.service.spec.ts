import { Test, TestingModule } from '@nestjs/testing';
import { EmployerRollService } from './employer_roll.service';

describe('EmployerRollService', () => {
  let service: EmployerRollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployerRollService],
    }).compile();

    service = module.get<EmployerRollService>(EmployerRollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
