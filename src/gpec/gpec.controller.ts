import { Controller, Get } from '@nestjs/common';
import { GpecService } from './gpec.service';

@Controller('gpec')
export class GpecController {
  constructor(private readonly gpecService: GpecService) {}

  @Get('gaps')
  async getGaps() {
    return this.gpecService.calculateCompetencyGaps();
  }

  @Get('recommendations')
  async getRecommendations() {
    return this.gpecService.generateRecommendations();
  }
}
