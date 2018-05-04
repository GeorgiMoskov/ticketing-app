import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IsLogged } from '../core/guards/is-logged';


export const ROUTES: Routes = [
    { path: '', component: MainComponent, canActivate: [IsLogged],
    children: [
      {path: 'admin', loadChildren: './../admin/admin.module#AdminModule' }
    ]  
  },
  ];