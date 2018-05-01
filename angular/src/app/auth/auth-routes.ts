import { Routes } from '@angular/router';

import { IsNotLogged } from './../core/guards/is-not-logged'

import { LoginComponent } from './login/login.component';

export const ROUTES: Routes =[
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'login', component: LoginComponent, canActivate: [IsNotLogged] }
]