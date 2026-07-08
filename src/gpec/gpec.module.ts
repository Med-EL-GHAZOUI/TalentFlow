import { Module } from '@nestjs/common';
import { GpecController } from './gpec.controller';
import { GpecService } from './gpec.service';

@Module({
  controllers: [GpecController],
  providers: [GpecService]
})
export class GpecModule {}
