import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './auth/token.interceptor';
import {HttpModule} from '@angular/http';
import { NgDatepickerModule } from './ng-datepicker';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {NgxPaginationModule} from 'ngx-pagination';
/* Shared Service */
import { FormDataService }    from './service/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    NgDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BootstrapModalModule,
    NgxPaginationModule,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
  ],
  providers: [MyServiceService,AuthGuard,AuthenticationService,
                { provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
                { provide: FormDataService, useClass: FormDataService },
                { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
