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
import {HttpClientModule,HttpClient} from '@angular/common/http';
// Translate module for multiple language translation start
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MyServiceService } from './my-service.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './auth/token.interceptor';
import {HttpModule} from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {NgxPaginationModule} from 'ngx-pagination';
/* Shared Service */
import { FormDataService }    from './service/formData.service';
import { StudentDataService }    from './admin/add-student/formData.service';
import { StudentWorkflowService }    from './admin/add-student/workflow.service';

import { CityService }    from './service/city-service';
import { StateService }    from './service/state-service';
import { CountryService }    from './service/country-service';
import { UserServices }    from './service/user-service';
import { WorkflowService }    from './workflow/workflow.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EqualValidator } from './change-password/equal-validator.directive';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AssignmentService }    from './service/assignment-service'
import { LibraryService }    from './service/library-service';
import { NewsService }    from './service/news-service';
import { PurchaseService }    from './service/purchase-service';
import { ResourceBankService }    from './service/resourceBank-service';
import { TimeTableService }    from './service/timeTable-service';
import { EmailService }    from './service/email-service';
import { SupplierService }    from './service/supplier-service';
import { TransportService }    from './service/transport-service';
import { AttendenceService }    from './service/attendence-service';
import { BookService }    from './service/book-service';
import { LibraryTransactionService }    from './service/libraryBookingRequest';
import { TblClassService }    from './service/tblClass-service';
import { DrawingService }    from './service/Drawing-service';
import { ExamService }    from './service/exam-service';
import { ExamDetailService }    from './service/ExamDetail-service';
import { HostelService }    from './service/Hostel-service';
import { InventoryService }    from './service/Inventory-service';
import { SchoolService }    from './service/school-service';
import { ClassRoomService }    from './service/class-room-service';
import { SubjectService }    from './service/subject-service';
import { DepartmentService }    from './service/department-service';
import { ClassSectionMasterService }    from './service/class-section-master.service';
import { AssignmentEvaluationService }    from './service/assignment-evaluation-service';
import { ClassSubjectService }    from './service/class-subject-service';
import { NotesService }    from './service/notes-service';

//AssignmentEvaluation
// https://github.com/ngx-translate/core
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}
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
    ChangePasswordComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    BootstrapModalModule,
    NgxPaginationModule,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
  ],
  providers: [MyServiceService,UserServices,CityService,SchoolService,
    StateService,CountryService,AuthGuard,AuthenticationService,InventoryService,
    AssignmentService,LibraryService,NewsService,PurchaseService,ExamService,
    ResourceBankService,TimeTableService,EmailService,LibraryTransactionService,
    SupplierService,TransportService,AttendenceService,BookService,HostelService,TblClassService,
    ExamDetailService,DrawingService,ClassRoomService,SubjectService,ClassSubjectService,
    DepartmentService,ClassSectionMasterService,AssignmentEvaluationService,NotesService,
                { provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
                { provide: FormDataService, useClass: FormDataService },
                { provide: StudentDataService, useClass: StudentDataService },
                { provide: StudentWorkflowService, useClass: StudentWorkflowService },
                { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
