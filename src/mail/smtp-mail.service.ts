import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.serverce";

@Injectable()
export class SMTPMmailService implements MailService {
 sendEmail(): string {
     return "SMTP Mail!"
 }
}