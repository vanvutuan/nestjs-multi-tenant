import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MessageDto } from './create-message-dto';
import { MessageSchema, MessageSchemaDocument } from './schemes/message.schema';

@Injectable()
export class MessageService {
  constructor(@InjectModel(MessageSchema.name) private readonly messageModel: Model<MessageSchemaDocument>) { }
  async findAll() {
    return await this.messageModel.find().exec()
  }
  async create(messageDto: MessageDto) {
    return await this.messageModel.create(messageDto)
  }
}
