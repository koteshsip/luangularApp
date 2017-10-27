import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './../login/login.component';
//  import { UserProfileComponent } from './../admin/user-profile/user-profile.component';
// import { AuthGuard } from './../_guards/auth.guard';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'login', component:LoginComponent},
    //   { path: 'admin', 
    //   component:AdminComponent,
    //        children: [
    //       {
    //         path: '',
    //         redirectTo: 'dashboard1',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'dashboard1',
    //         component: AdminDashboard1Component
    //       },
    //       {
    //         path: 'dashboard2',
    //         component: AdminDashboard2Component
    //       }
    //       ,
    //       // {
    //       //   path: 'userprofile',
    //       //   component: UserProfileComponent
    //       // }
    //     ]
    // },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
