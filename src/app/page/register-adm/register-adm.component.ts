import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";
import {User} from "../../model/user";
import {TreeSelectModule} from "primeng/treeselect";

@Component({
  selector: 'app-register-adm',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    TreeSelectModule
  ],
  templateUrl: './register-adm.component.html',
  styleUrl: './register-adm.component.css'
})

export class RegisterAdmComponent {

  username: string = '';
  nome: string = '';
  password: string = '';
  confirmPassword = '';
  categoria: any[] = [
    { key: "USER", label: 'Usuário' },
    { key: "ADMIN", label: 'Administrador' },
    { key: "MANAGER", label: 'Gerente' }
  ];
  selectedCategoria: any = null;

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  Save() {
    const newUser: User = {
      username: this.username,
      nome: this.nome,
      password: this.password,
      roles: [this.selectedCategoria ? this.selectedCategoria.key : ''] // Enviando como array
    };

    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'As senhas são divirgentes!',life: 10000});
    }
    else{
      console.log('Dados a serem enviados:', newUser);
      this.authService.saveAdm(newUser).subscribe(
        (response) => {
          this.messageService.add({severity:'success', summary:'Sucesso', detail: response, life: 10000});
          console.log('Sucess:', response);
          // Limpar os campos após o sucesso
          this.username = '';
          this.nome = '';
          this.password = '';
        },
        (error) => {
          const errorMessage = error.error;
          this.messageService.add({severity:'error', summary:'Erro', detail: errorMessage, life: 10000 });
          console.error('Erro:', error);
        }
      );
    }
  }

  clearForm() {
    this.username = '';
    this.nome = '';
    this.password = '';
    this.confirmPassword = '';
    //this.selectedCategoria = null;
    this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Cadastro Cancelado', life: 10000});
  }
}
