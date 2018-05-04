import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { canAccessAdminPanel } from '../core/guards/canAccessAdminPanel';
import { GetAllRolesResolver } from '../core/resolvers/get-all-roles.resolver';
import { GetAllUsersResolver } from '../core/resolvers/get-all-users.resolver';

export const ROUTES: Routes =[
    { path: '', component: AdminPanelComponent, canActivate:[canAccessAdminPanel],
     children: [ 
        {path: '', redirectTo: 'add-user' },
        {path: 'add-user', component: AddNewUserComponent, resolve: {roles: GetAllRolesResolver}  },
        {path: 'delete-user', component: DeleteUserComponent, resolve: {users: GetAllUsersResolver} }
    ]},
]