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
