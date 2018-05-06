import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MaterialModule } from '../shared/material.module';
import { AdminRoutingModule } from './admin-routes.module';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminPanelComponent,
    AddNewUserComponent,
    DeleteUserComponent
  ]
})
export class AdminModule { }
