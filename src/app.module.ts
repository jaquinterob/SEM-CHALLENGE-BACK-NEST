import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECT_LOCAL } from './db/mongo';
import { CompetitorModule } from './competitor/competitor.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './errors/AllExceptionsFilter';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_CONNECT || MONGO_CONNECT_LOCAL,
      }),
    }),
    CompetitorModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
