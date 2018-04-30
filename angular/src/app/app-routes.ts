import { LoginComponent } from './login/login.component'
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  // { path: '**', component: NotFoundComponent} // TODO add component 
];