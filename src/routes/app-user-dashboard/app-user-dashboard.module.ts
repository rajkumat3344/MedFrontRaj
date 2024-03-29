import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppUserDashboardRoutingModule } from './app-user-dashboard-routing.module';
import { AppUserDashboardComponent } from './app-user-dashboard/app-user-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppUserHomeComponent } from './components/app-user-home/app-user-home.component';
import { AppUserBookingsComponent } from './components/app-user-bookings/app-user-bookings.component';
import { AppUserFavoriteComponent } from './components/app-user-favorite/app-user-favorite.component';
import { AppUserProfileEditComponent } from './components/app-user-profile-edit/app-user-profile-edit.component';
import { AppUserPasswordChangeComponent } from './components/app-user-password-change/app-user-password-change.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppUserDashboardComponent,
    AppUserHomeComponent,
    AppUserBookingsComponent,
    AppUserFavoriteComponent,
    AppUserProfileEditComponent,
    AppUserPasswordChangeComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    AppUserDashboardRoutingModule
  ]
})
export class AppUserDashboardModule { }
