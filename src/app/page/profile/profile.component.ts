import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {AuthServiceService} from "../../service/auth-service.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AvatarModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  usuario: string = '';
  constructor(private authService: AuthServiceService, private messageService: MessageService) {}

}
