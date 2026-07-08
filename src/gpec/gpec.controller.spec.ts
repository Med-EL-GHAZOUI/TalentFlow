import { Test, TestingModule } from '@nestjs/testing';
import { GpecController } from './gpec.controller';

describe('GpecController', () => {
  let controller: GpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpecController],
    }).compile();

    controller = module.get<GpecController>(GpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
