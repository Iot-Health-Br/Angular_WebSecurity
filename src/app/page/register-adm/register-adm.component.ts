import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register-adm',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule
  ],
  templateUrl: './register-adm.component.html',
  styleUrl: './register-adm.component.css'
})
export class RegisterAdmComponent {
  username: string = '';
  password: string = '';
  confirmPassword = '';

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  Save() {

  }

  clearForm() {

  }
}
