import { Module } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { CompetitorController } from './competitor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Competitor, competitorSchema } from './schemas/room.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Competitor.name,
        schema: competitorSchema,
      },
    ]),
  ],
  controllers: [CompetitorController],
  providers: [CompetitorService],
})
export class CompetitorModule {}
