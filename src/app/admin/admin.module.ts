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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogsComponent } from './logs/logs.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';
import { NotificationfomComponent } from './notificationfom/notificationfom.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AddCityComponent } from './add-city/add-city.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddStateComponent } from './add-state/add-state.component';
import { StateListComponent } from './state-list/state-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { CountryListComponent } from './country-list/country-list.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    Ng2TableModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
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
    UserProfileComponent,
    LogsComponent,
    NotificationComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationfomComponent,
    AdduserComponent,
    AddprofileComponent,
    AddaddressComponent,
    ListOfUsersComponent,
    AddCityComponent,
    AddCountryComponent,
    AddStateComponent,
    StateListComponent,
    CityListComponent,
    CountryListComponent
  ],entryComponents: [
        MessageComponent
      ],
  exports: [AdminComponent]
})
export class AdminModule { }
