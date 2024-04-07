import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Competitor extends Document {
  @Prop({ required: true, trim: true })
  name: string;
  @Prop({ required: true, default: [] })
  ratings: string[];
  @Prop({ required: true, default: [] })
  phone: string;
  @Prop({ default: '' })
  photo: string;
}

export const competitorSchema = SchemaFactory.createForClass(Competitor);
