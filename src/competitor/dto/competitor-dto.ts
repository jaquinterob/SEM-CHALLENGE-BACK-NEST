import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rating } from '../interfaces/rating';

export class CompetitorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  ratings: Rating[];
  @IsString()
  phone: string;
  @IsString()
  photo: string;
}

export class UpdateCompetitorDto extends PartialType(CompetitorDto) {}
