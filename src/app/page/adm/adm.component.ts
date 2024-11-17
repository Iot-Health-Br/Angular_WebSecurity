import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {User} from "../../model/user";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent implements OnInit{
  products!: User[];

  selectedProduct!: User;

  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

  ngOnInit() {
    /*
    this.authService.listUser().then((data) => {
      this.products = data;
    });*/
  }
}
