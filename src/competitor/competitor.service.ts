import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CompetitorDto } from './dto/competitor-dto';
import { UpdateCompetitorDto } from './dto/competitor-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Competitor } from './schemas/room.schema';
import { Error, Model, Types } from 'mongoose';
import { error } from 'console';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class CompetitorService {
  I;
  constructor(
    @InjectModel(Competitor.name) private competitorModel: Model<Competitor>,
  ) {}
  create(createCompetitorDto: CompetitorDto): Promise<Competitor> {
    try {
      return this.competitorModel.create(createCompetitorDto);
    } catch (error) {
      console.error(error);
      throw new Error('error creating competitor');
    }
  }

  async findAll(): Promise<Competitor[]> {
    try {
      return await this.competitorModel.find();
    } catch (error) {
      console.error(error);
      throw new Error('error getting competitors');
    }
  }

  async findOne(_id: string): Promise<Competitor> {
    try {
      return await this.competitorModel.findById(_id);
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Error getting competitor by id');
    }
  }

  async update(id: string, updateCompetitorDto: UpdateCompetitorDto) {
    try {
      const updatedCompetitor = await this.competitorModel.findOneAndUpdate(
        { _id: id },
        updateCompetitorDto,
        { returnOriginal: false },
      );
      if (!updatedCompetitor) {
        throw new NotFoundException(`Competitor with ID ${id} not found`);
      }
      return updatedCompetitor;
    } catch (error) {
      throw new Error('Error updating competitor');
    }
  }

  async remove(_id: string) {
    try {
      const result = await this.competitorModel.deleteOne({ _id });
      if (result.deletedCount === 0) {
        throw new NotFoundException(`Competitor with ID ${_id} not found`);
      }
      return { message: `Competitor with ID ${_id} deleted successfully` };
    } catch (error) {
      console.error(error);
      throw new Error('Error deleting competitor');
    }
  }
}
