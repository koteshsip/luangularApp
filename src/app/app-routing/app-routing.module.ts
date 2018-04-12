import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './../login/login.component';
import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './../change-password/change-password.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component:LoginComponent},
      { path: 'forgot-password', component:ForgotPasswordComponent},
      { path: 'change-password/:id/:token', component:ChangePasswordComponent}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
