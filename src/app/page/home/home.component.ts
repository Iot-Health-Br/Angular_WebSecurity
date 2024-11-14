import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Button, ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    ReactiveFormsModule,
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

  register() {
    this.router.navigate(['/register']);
  }
}
