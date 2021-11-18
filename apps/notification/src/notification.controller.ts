import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

interface NotifyData {
  user: string;
  data: object;
}

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @MessagePattern('notify')
  async notify(data: NotifyData) {
    console.log('send')
    console.log("notification data" + data.user);
    let a: number = data.data['a'];
    let b: number = data.data['b'];
    console.log(a, b)
    return a + b;
  }
}
