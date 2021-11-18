import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type MessageSchemaDocument = MessageSchema & Document;

@Schema()
export class MessageSchema {
  @Prop()
  name: string

  @Prop()
  createdAt: Date

  @Prop({ type: mongoose.Schema.Types.Mixed })
  data: Record<string, any>
}

export const MessageSchemaSchema = SchemaFactory.createForClass(MessageSchema);