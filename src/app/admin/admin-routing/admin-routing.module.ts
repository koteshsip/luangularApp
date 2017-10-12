import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { UserComponent } from './../user/user.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogsComponent } from './../../admin/logs/logs.component';
import { NotificationComponent } from './../../admin/notification/notification.component';
import { NotificationsComponent } from './../../admin/notifications/notifications.component';
import { NotificationfomComponent } from './../../admin/notificationfom/notificationfom.component';
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
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          },{
            path: 'userprofile',
            component: UserComponent
          },{
            path: 'logslist',
            component: LogsComponent
          },{
            path: 'editNotificatin',
            component: NotificationComponent
          },{
            path: 'notificatinlist',
            component: NotificationsComponent
          },{
            path: 'addNotificatin',
            component: NotificationfomComponent
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
