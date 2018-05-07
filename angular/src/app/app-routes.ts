import { Routes, Resolve } from '@angular/router';
import { Eror404Component } from './eror404/eror404.component';
import { Inject } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: Eror404Component },
  ];
