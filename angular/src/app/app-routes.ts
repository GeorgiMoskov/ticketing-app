import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Eror404Component } from './eror404/eror404.component';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: Eror404Component },
  ];