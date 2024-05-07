import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './mail/http.module';
import { MailService } from './mail/mail.serverce';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { AppService } from './app.service';
import { SMTPMmailService } from './mail/smtp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: PostmarkMailService,
    }
  ],
})
export class AppModule {}
