import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { canAccessAdminPanel } from '../core/guards/canAccessAdminPanel';

export const ROUTES: Routes =[
    { path: '', component: AdminPanelComponent, canActivate:[canAccessAdminPanel],
     children: [ 
        {path: '', redirectTo: 'add-user' },
        {path: 'add-user', component: AddNewUserComponent },
        {path: 'delete-user', component: DeleteUserComponent }
    ]},
]