import { Routes, Resolve } from '@angular/router';
import { Eror404Component } from './eror404/eror404.component';
import { Inject } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: Eror404Component },
  ];

  // export const ROUTES: Routes = [
  //   { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  //   { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', resolve: [{'users', UsersResolver}] },
  //   { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  //   { path: '**', component: Eror404Component },
  // ];

  // class User{

// }
//   @Injectable()
// class UsersResolver implements Resolve<User> {

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
//       route.par
//       return this.userService.getAll();
//     }
//   constructor(private userService: UsersService){}

  
  
// }


// ngOnInit(){
//   this.route.snap.data['users']
// }