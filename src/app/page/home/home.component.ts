import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Button, ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) {
  }

  login(){
    this.router.navigate(['/login']);
  }

  adm(){
    this.router.navigate(['/admin']);
  }
}
