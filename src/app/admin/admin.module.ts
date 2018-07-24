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
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { TimeTableListComponent } from './time-table-list/time-table-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { BookingRequestListComponent } from './booking-request-list/booking-request-list.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { EmailListComponent } from './email-list/email-list.component';
import { ResourceBankListComponent } from './resource-bank-list/resource-bank-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamDetailListComponent } from './exam-detail-list/exam-detail-list.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { DrawingListComponent } from './drawing-list/drawing-list.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { AddBookingRequestComponent } from './add-booking-request/add-booking-request.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AddTransportComponent } from './add-transport/add-transport.component';
import { AddResourceBankComponent } from './add-resource-bank/add-resource-bank.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddExamDetailComponent } from './add-exam-detail/add-exam-detail.component';
import { AddAttendenceComponent } from './add-attendence/add-attendence.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddDrawingComponent } from './add-drawing/add-drawing.component';
import { AddEmailComponent } from './add-email/add-email.component';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TimetableScheduleComponent } from './timetable-schedule/timetable-schedule.component';
import { AddTimetableScheduleComponent } from './add-timetable-schedule/add-timetable-schedule.component';
import { AddFlipbookComponent } from './add-flipbook/add-flipbook.component';
import { FlipbookListComponent } from './flipbook-list/flipbook-list.component';
import { BooksPurchaseListComponent } from './books-purchase-list/books-purchase-list.component';
import { AddBooksPurchaseComponent } from './add-books-purchase/add-books-purchase.component';
import { AddBooksIssuedComponent } from './add-books-issued/add-books-issued.component';
import { BooksIssuedListComponent } from './books-issued-list/books-issued-list.component';

import { ParentsComponent } from './parents/parents.component';
import { StudentsComponent } from './students/students.component';
import { LibrarySettingsComponent } from './library-settings/library-settings.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ClassSectionComponent } from './class-section/class-section.component';
import { AddClassSectionComponent } from './add-class-section/add-class-section.component';
import { ClassSubjectListComponent } from './class-subject-list/class-subject-list.component';
import { AddClassSubjectComponent } from './add-class-subject/add-class-subject.component';
import { AssignmentEvaluationListComponent } from './assignment-evaluation-list/assignment-evaluation-list.component';
import { AddAssignmentEvaluationComponent } from './add-assignment-evaluation/add-assignment-evaluation.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentProfileComponent } from './add-student-profile/add-student-profile.component';
import { AddStudentAddressComponent } from './add-student-address/add-student-address.component';

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
    CountryListComponent,
    HostelListComponent,
    ClassListComponent,
    BookListComponent,
    AssignmentListComponent,
    TimeTableListComponent,
    InventoryListComponent,
    BookingRequestListComponent,
    LibraryListComponent,
    PurchaseComponent,
    SupplierListComponent,
    TransportListComponent,
    EmailListComponent,
    ResourceBankListComponent,
    ExamListComponent,
    ExamDetailListComponent,
    AttendenceListComponent,
    SchoolListComponent,
    NewsListComponent,
    DrawingListComponent,
    AddHostelComponent,
    AddClassComponent,
    AddBookComponent,
    AddAssignmentComponent,
    AddTimetableComponent,
    AddInventoryComponent,
    AddBookingRequestComponent,
    AddLibraryComponent,
    AddPurchaseComponent,
    AddSupplierComponent,
    AddTransportComponent,
    AddResourceBankComponent,
    AddExamComponent,
    AddExamDetailComponent,
    AddAttendenceComponent,
    AddSchoolComponent,
    AddNewsComponent,
    AddDrawingComponent,
    AddEmailComponent,
    ClassRoomsComponent,
    SubjectsComponent,
    DepartmentsComponent,
    TimetableScheduleComponent,
    AddTimetableScheduleComponent,
    AddFlipbookComponent,
    FlipbookListComponent,
    BooksPurchaseListComponent,
    AddBooksPurchaseComponent,
    AddBooksIssuedComponent,
    BooksIssuedListComponent,
    ParentsComponent,
    StudentsComponent,
    LibrarySettingsComponent,
    AddSubjectComponent,
    ClassSectionComponent,
    AddClassSectionComponent,
    ClassSubjectListComponent,
    AddClassSubjectComponent,
    AssignmentEvaluationListComponent,
    AddAssignmentEvaluationComponent,
    AddStudentComponent,
    StudentListComponent,
    AddStudentProfileComponent,
    AddStudentAddressComponent
  ],entryComponents: [
        MessageComponent
      ],
  exports: [AdminComponent]
})
export class AdminModule { }
