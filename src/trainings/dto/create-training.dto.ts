import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateTrainingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  provider?: string;

  @IsOptional()
  duration?: number;

  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @IsOptional()
  targetSkillId?: number;
}
