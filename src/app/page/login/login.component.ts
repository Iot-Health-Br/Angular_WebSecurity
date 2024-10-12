import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthServiceService} from "../../service/auth-service.service";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button, ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {ButtonGroupModule} from "primeng/buttongroup";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    CardModule,
    InputTextModule,
    MessagesModule,
    FloatLabelModule,
    PasswordModule,
    ToastModule,
    Button,
    ButtonModule,
    RippleModule,
    ButtonGroupModule,
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
      this.errorMessage = 'Nome de usuário ou senha inválidos.';
    }
  }
}
