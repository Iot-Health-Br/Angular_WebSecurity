import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {User} from "../../model/user";
import {AuthServiceService} from "../../service/auth-service.service";
import {Button} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    FormsModule,
    CommonModule,
    Button,
    ToastModule,
    ProgressSpinnerModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  products!: User[];
  selectedProduct!: User;

  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;

    this.authService.getUsers().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar usuários: ' + err.message;
        this.loading = false;
      }
    });
  }

  changeUser() {

  }

  clearForm() {

  }

  searchUser() {

  }
}
