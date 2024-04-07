import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { CompetitorDto } from './dto/competitor-dto';
import { UpdateCompetitorDto } from './dto/competitor-dto';

@Controller('competitor')
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @Post()
  create(@Body() createCompetitorDto: CompetitorDto) {
    return this.competitorService.create(createCompetitorDto);
  }

  @Get()
  findAll() {
    return this.competitorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompetitorDto: UpdateCompetitorDto,
  ) {
    return this.competitorService.update(id, updateCompetitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitorService.remove(id);
  }
}
