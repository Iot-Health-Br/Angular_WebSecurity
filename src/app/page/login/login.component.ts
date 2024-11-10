import { Component } from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthServiceService} from "../../service/auth-service.service";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button, ButtonModule} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {ButtonGroupModule} from "primeng/buttongroup";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    InputTextModule,
    MessagesModule,
    PasswordModule,
    ToastModule,
    Button,
    ButtonModule,
    ButtonGroupModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  onLogin(): void {
    const success = this.authService.login(this.username, this.password);
    if (!success) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }else{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
  }
}
