import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {AdmComponent} from "./page/adm/adm.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {UserComponent} from "./page/user/user.component";
import {authGuard} from "./guard/auth.guard";
import {adminGuard} from "./guard/admin.guard";
import {ManagerComponent} from "./page/manager/manager.component";
import {managerGuard} from "./guard/manager.guard";
import {RegisterComponent} from "./page/register/register.component";
import {RegisterAdmComponent} from "./page/register-adm/register-adm.component";
import {UserDetailsComponent} from "./page/user-details/user-details.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-adm', component: RegisterAdmComponent, canActivate: [managerGuard,adminGuard]},
  {path: 'user-details', component: UserDetailsComponent, canActivate: [adminGuard,managerGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'admin', component: AdmComponent, canActivate: [adminGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'user', component: UserComponent, canActivate: [authGuard]},
  {path: 'manager', component: ManagerComponent, canActivate: [managerGuard]},
];
