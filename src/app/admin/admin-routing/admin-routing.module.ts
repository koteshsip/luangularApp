import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogsComponent } from './../../admin/logs/logs.component';
import { NotificationComponent } from './../../admin/notification/notification.component';
import { NotificationsComponent } from './../../admin/notifications/notifications.component';
import { NotificationfomComponent } from './../../admin/notificationfom/notificationfom.component';
import { AdduserComponent } from './../../admin/adduser/adduser.component';
import { AddprofileComponent } from './../../admin/addprofile/addprofile.component';
import { AddaddressComponent } from './../../admin/addaddress/addaddress.component';
import { ListOfUsersComponent } from './../../admin/list-of-users/list-of-users.component';
import { UIRouter, isFunction, StateObject } from "@uirouter/core";
import { AuthGuard } from './../../_guards/index';

import { AddCityComponent } from './../../admin/add-city/add-city.component';
import { AddCountryComponent } from './../../admin/add-country/add-country.component';
import { AddStateComponent } from './../../admin/add-state/add-state.component';
import { StateListComponent } from './../../admin/state-list/state-list.component';
import { CityListComponent } from './../../admin/city-list/city-list.component';
import { CountryListComponent } from './../../admin/country-list/country-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1'
            ,component: AdminDashboard1Component,
            canActivate: [AuthGuard]
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component,
            canActivate: [AuthGuard]
          },{
            path: 'userprofile',
            component: UserProfileComponent,
            canActivate: [AuthGuard]
          },{
            path: 'logslist',
            component: LogsComponent,
            canActivate: [AuthGuard]
          },{
            path: 'editNotificatin',
            component: NotificationComponent,
            canActivate: [AuthGuard]
          },{
            path: 'notificatinlist',
            component: NotificationsComponent,
            canActivate: [AuthGuard]
          },{
            path: 'addNotificatin/:id',
            component: NotificationfomComponent
          },{
            path: 'addNotificatin',
            component: NotificationfomComponent,
            canActivate: [AuthGuard]
          },{
            path: 'deleteNotification/:id',
            component: NotificationfomComponent,
            canActivate: [AuthGuard]
          }
          ,{
            path: 'addUser',
            component: AdduserComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'addProfile',
            component: AddprofileComponent,
            canActivate: [AuthGuard]
          },{
            path: 'addAddress',
            component: AddaddressComponent,
            canActivate: [AuthGuard]
          },{
            path: 'list-of-users',
            component: ListOfUsersComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-city',
            component: AddCityComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-city/:id',
            component: AddCityComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-country',
            component: AddCountryComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-country/:id',
            component: AddCountryComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-state',
            component: AddStateComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-state/:id',
            component: AddStateComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'country-list',
            component: CountryListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'state-list',
            component: StateListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'city-list',
            component: CityListComponent,
            canActivate: [AuthGuard]
          }
          
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
