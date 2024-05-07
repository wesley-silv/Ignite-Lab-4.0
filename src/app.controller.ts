import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.serverce';

@Controller('app')
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('hello')
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
