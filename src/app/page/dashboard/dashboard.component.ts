import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import {Button} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        Button,
        PaginatorModule,
        ToastModule,
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _router: Router, private _service: AuthServiceService, private messageService: MessageService) {
  }
  admRegister(){
    this._router.navigate(['/registerAdm']);
  }
  user(){
    this._router.navigate(['/user']);
  }

  adm() {
    this._router.navigate(['/admin']);
  }

  profile(){
    this._router.navigate(['/profile']);
  }

  logout(){
    this._service.logout();
  }

  manager(){
    this._router.navigate(['/manager']);
  }

}
