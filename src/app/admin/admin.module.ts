import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { UserComponent } from './user/user.component';
import { LogsComponent } from './logs/logs.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';
import { NotificationfomComponent } from './notificationfom/notificationfom.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    UserComponent,
    LogsComponent,
    NotificationComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationfomComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
