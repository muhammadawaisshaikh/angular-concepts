import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListingComponent,
    AddEditUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
