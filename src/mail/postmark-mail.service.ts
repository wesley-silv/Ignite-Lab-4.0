import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.serverce";

@Injectable()
export class PostmarkMailService implements MailService {
 sendEmail(): string {
     return "Postmark Mail!"
 }
}