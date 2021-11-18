import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessageDto } from './create-message-dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Get()
  async findAll() {
    return this.messageService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() messageDto: MessageDto) {
    return this.messageService.create(messageDto);
  }
}
