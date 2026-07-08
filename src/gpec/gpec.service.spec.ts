import { Test, TestingModule } from '@nestjs/testing';
import { GpecService } from './gpec.service';

describe('GpecService', () => {
  let service: GpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpecService],
    }).compile();

    service = module.get<GpecService>(GpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
