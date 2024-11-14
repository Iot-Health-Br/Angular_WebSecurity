import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    Button,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ToastModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword = '';
  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  Save() {
    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'As senhas são divirgentes!',life: 10000});
    }
    else{
      console.log(this.username,this.password);
      this.authService.save(this.username, this.password).subscribe({
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
  }

  clearForm() {
    this.username = '';
    this.password = '';
    this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Cadastro Cancelado',life: 10000});
  }
}
