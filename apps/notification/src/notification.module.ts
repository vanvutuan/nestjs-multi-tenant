import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test-notification'), MessageModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule { }
