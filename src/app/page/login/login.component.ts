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
import {error} from "@angular/compiler-cli/src/transformers/util";

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

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  onLogin(): void {
    if (this.username && this.password) {
      console.log(this.username,this.password);
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          if (response.authenticated) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message,life: 10000 });}
          else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message,life: 10000 });}
        },
        error: (error) => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao tentar fazer login. Por favor, tente novamente.',life: 10000});}
      });
    }
    else {
        this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Por favor, preencha usuário e senha.',life: 10000});}
  }

  // Método para limpar os campos do formulário
  clearForm() {
    this.username = '';
    this.password = '';
    this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Login Cancelado',life: 10000});
  }
}
