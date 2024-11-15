import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";
import {User} from "../../model/user";

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
  roles: string = 'USER';
  confirmPassword = '';
  constructor(private authService: AuthServiceService, private messageService: MessageService) {}


  Save() {
    const newUser: User = {
      username: this.username,
      password: this.password
    };

    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'As senhas são divirgentes!',life: 10000});
    }
    else{
      console.log(this.username,this.password);
      this.authService.saveUser(newUser).subscribe(
        (response) => {
          this.messageService.add({severity:'success', summary:'Sucesso', detail: response, life: 10000});
          console.log('Pessoa salva com sucesso!', response);
          // Limpar os campos após o sucesso
          this.username = '';
          this.password = '';
        },
        (error) => {
          const errorMessage = error.error;
          this.messageService.add({severity:'error', summary:'Erro', detail: errorMessage, life: 10000 });
          console.error('Erro ao salvar a pessoa', error);
        }
      );
    }
  }

  clearForm() {
    this.username = '';
    this.password = '';
    this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Cadastro Cancelado',life: 10000});
  }
}
