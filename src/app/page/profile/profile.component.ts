import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {routes} from "../../app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AvatarModule,
    Button,
    ToastModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userId: string | null = null;
  fullName: string | null = null;
  username: string | null = null;
  constructor(private router: Router, private authService: AuthServiceService, private messageService: MessageService) {}

  ngOnInit() {
    // Recupera os dados do localStorage
    this.userId = localStorage.getItem('userId');
    this.fullName = localStorage.getItem('fullName');
    this.username = localStorage.getItem('username');
  }

  returnHome() {
    this.router.navigate(['/dashboard']);
  }
}
