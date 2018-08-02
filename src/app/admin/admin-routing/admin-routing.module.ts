import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogsComponent } from './../../admin/logs/logs.component';
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
import { AddStudentProfileComponent } from './../../admin/add-student-profile/add-student-profile.component';
import { AddStudentAddressComponent } from './../../admin/add-student-address/add-student-address.component';
import { HostelListComponent } from './../../admin/hostel-list/hostel-list.component';
import { ClassListComponent } from './../../admin/class-list/class-list.component';
import { BookListComponent } from './../../admin/book-list/book-list.component';
import { AssignmentListComponent } from './../../admin/assignment-list/assignment-list.component';
import { TimeTableListComponent } from './../../admin/time-table-list/time-table-list.component';
import { InventoryListComponent } from './../../admin/inventory-list/inventory-list.component';
import { BookingRequestListComponent } from './../../admin/booking-request-list/booking-request-list.component';
import { LibraryListComponent } from './../../admin/library-list/library-list.component';
import { PurchaseComponent } from './../../admin/purchase/purchase.component';
import { SupplierListComponent } from './../../admin/supplier-list/supplier-list.component';
import { TransportListComponent } from './../../admin/transport-list/transport-list.component';
import { EmailListComponent } from './../../admin/email-list/email-list.component';
import { ResourceBankListComponent } from './../../admin/resource-bank-list/resource-bank-list.component';
import { ExamListComponent } from './../../admin/exam-list/exam-list.component';
import { ExamDetailListComponent } from './../../admin/exam-detail-list/exam-detail-list.component';
import { AttendenceListComponent } from './../../admin/attendence-list/attendence-list.component';
import { SchoolListComponent } from './../../admin/school-list/school-list.component';
import { NewsListComponent } from './../../admin/news-list/news-list.component';
import { DrawingListComponent } from './../../admin/drawing-list/drawing-list.component';
import { AddHostelComponent } from './../../admin/add-hostel/add-hostel.component';
import { AddClassComponent } from './../../admin/add-class/add-class.component';
import { AddAssignmentComponent } from './../../admin/add-assignment/add-assignment.component';
import { AddTimetableComponent } from './../../admin/add-timetable/add-timetable.component';
import { AddInventoryComponent } from './../../admin/add-inventory/add-inventory.component';
import { AddBookingRequestComponent } from './../../admin/add-booking-request/add-booking-request.component';
import { AddLibraryComponent } from './../../admin/add-library/add-library.component';
import { AddPurchaseComponent } from './../../admin/add-purchase/add-purchase.component';
import { AddSupplierComponent } from './../../admin/add-supplier/add-supplier.component';
import { AddTransportComponent } from './../../admin/add-transport/add-transport.component';
import { AddEmailComponent } from './../../admin/add-email/add-email.component';
import { AddResourceBankComponent } from './../../admin/add-resource-bank/add-resource-bank.component';
import { AddExamComponent } from './../../admin/add-exam/add-exam.component';
import { AddExamDetailComponent } from './../../admin/add-exam-detail/add-exam-detail.component';
import { AddAttendenceComponent } from './../../admin/add-attendence/add-attendence.component';
import { AddSchoolComponent } from './../../admin/add-school/add-school.component';
import { AddNewsComponent } from './../../admin/add-news/add-news.component';
import { AddDrawingComponent } from './../../admin/add-drawing/add-drawing.component';
import { ClassRoomsComponent } from './../../admin/class-rooms/class-rooms.component';
import { SubjectsComponent } from './../../admin/subjects/subjects.component';
import { DepartmentsComponent } from './../../admin/departments/departments.component';
import { TimetableScheduleComponent } from './../../admin/timetable-schedule/timetable-schedule.component';
import { AddTimetableScheduleComponent } from './../../admin/add-timetable-schedule/add-timetable-schedule.component';
import { AddFlipbookComponent } from './../../admin/add-flipbook/add-flipbook.component';
import { FlipbookListComponent } from './../../admin/flipbook-list/flipbook-list.component';
import { AddBookComponent } from './../../admin/add-book/add-book.component';
import { BooksPurchaseListComponent } from './../../admin/books-purchase-list/books-purchase-list.component';
import { AddBooksPurchaseComponent } from './../../admin/add-books-purchase/add-books-purchase.component';
import { AddBooksIssuedComponent } from './../../admin/add-books-issued/add-books-issued.component';
import { BooksIssuedListComponent } from './../../admin/books-issued-list/books-issued-list.component';
import { ParentsComponent } from './../../admin/parents/parents.component';
import { StudentsComponent } from './../../admin/students/students.component';
import { LibrarySettingsComponent } from './../../admin/library-settings/library-settings.component';
import { AddSubjectComponent } from './../../admin/add-subject/add-subject.component';
import { ClassSectionComponent } from './../../admin/class-section/class-section.component';
import { ClassSubjectListComponent } from './../../admin/class-subject-list/class-subject-list.component';
import { AddClassSubjectComponent } from './../../admin/add-class-subject/add-class-subject.component';
import { AssignmentEvaluationListComponent } from './../../admin/assignment-evaluation-list/assignment-evaluation-list.component';
import { AddClassSectionComponent } from '../add-class-section/add-class-section.component';
import { AddAssignmentEvaluationComponent } from './../../admin/add-assignment-evaluation/add-assignment-evaluation.component';
import { AddStudentComponent } from './../../admin/add-student/add-student.component';
import { StudentListComponent } from './../../admin/student-list/student-list.component';
import { TopicListComponent } from './../../admin/topic-list/topic-list.component';
import { AddTopicComponent } from './../../admin/add-topic/add-topic.component';
import { NotesCategoryListComponent } from './../../admin/notes-category-list/notes-category-list.component';
import { AddNotesCategoryComponent } from './../../admin/add-notes-category/add-notes-category.component';
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
            path: 'notificatinlist',
            component: NotificationsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'addNotificatin/:id',
            component: NotificationfomComponent,
            canActivate: [AuthGuard]
          }
          ,{
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
          },{
            path: 'addUser/:id',
            component: AdduserComponent,
            canActivate: [AuthGuard]
          }, 
          {
            path: 'addProfile/:id',
            component: AddprofileComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'addAddress/:id',
            component: AddaddressComponent,
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
            path: 'addStudentProfile/:id',
            component: AddStudentProfileComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'addStudentAddress/:id',
            component: AddStudentAddressComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'addStudentProfile',
            component: AddStudentProfileComponent,
            canActivate: [AuthGuard]
          },{
            path: 'addStudentAddress',
            component: AddStudentAddressComponent,
            canActivate: [AuthGuard]
          },
          {
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
          ,
          {
            path: 'hostel-list',
            component: HostelListComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'class-list',
            component: ClassListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'book-list',
            component: BookListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'assignment-list',
            component: AssignmentListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'timetable-list',
            component: TimeTableListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'inventory-list',
            component: InventoryListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'booking-request-list',
            component: BookingRequestListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'library-list',
            component: LibraryListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'purchase-list',
            component: PurchaseComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'supplier-list',
            component: SupplierListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'class-section-list',
            component: ClassSectionComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'transport-list',
            component: TransportListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'email-list',
            component: EmailListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'resource-bank-list',
            component: ResourceBankListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'exam-list',
            component: ExamListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'exam-detail-list',
            component: ExamDetailListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'attendence-list',
            component: AttendenceListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'School-list',
            component: SchoolListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'news-list',
            component: NewsListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'drawing-list',
            component: DrawingListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-hostel',
            component: AddHostelComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-hostel/:id',
            component: AddHostelComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'add-class',
            component: AddClassComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-class/:id',
            component: AddClassComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-book',
            component: AddBookComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-book/:id',
            component: AddBookComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-assignment',
            component: AddAssignmentComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-assignment/:assignmentId/:classId/:sectionId',
            component: AddAssignmentComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-timetable',
            component: AddTimetableComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-timetable/:id',
            component: AddTimetableComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-inventory',
            component: AddInventoryComponent,
            canActivate: [AuthGuard]
          },{
            path: 'update-inventory/:id',
            component: AddInventoryComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-booking-request',
            component: AddBookingRequestComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-booking-request/:id',
            component: AddBookingRequestComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-library',
            component: AddLibraryComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-library/:id',
            component: AddLibraryComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-purchase',
            component: AddPurchaseComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-purchase/:id',
            component: AddPurchaseComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-supplier',
            component: AddSupplierComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-supplier/:id',
            component: AddSupplierComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-transport',
            component: AddTransportComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-transport/:id',
            component: AddTransportComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'send-email',
            component: AddEmailComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-resource-bank',
            component: AddResourceBankComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-resource-bank/:id',
            component: AddResourceBankComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-exam',
            component: AddExamComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-exam/:id',
            component: AddExamComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-exam-detail',
            component: AddExamDetailComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-exam-detail/:id',
            component: AddExamDetailComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'add-attendence',
            component:AddAttendenceComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'update-attendence/:id',
            component:AddAttendenceComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'add-school',
            component:AddSchoolComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'update-school/:id',
            component:AddSchoolComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'add-news',
            component:AddNewsComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'update-news/:id',
            component:AddNewsComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'add-drawing',
            component:AddDrawingComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'update-drawing/:id',
            component:AddDrawingComponent,
            canActivate: [AuthGuard]
          },{
            path: 'class-rooms-list',
            component: ClassRoomsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'subjects-list',
            component: SubjectsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-subject',
            component: AddSubjectComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'update-subject/:subjectId/:textBookISBN',
            component:AddSubjectComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'departments-list',
            component: DepartmentsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'timetable-schedule',
            component: TimetableScheduleComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-timetable-schedule',
            component: AddTimetableScheduleComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-flipbook',
            component: AddFlipbookComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'flipbook-list',
            component: FlipbookListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'books-purchase-list',
            component: BooksPurchaseListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-books-purchase',
            component: AddBooksPurchaseComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-books-issued',
            component: AddBooksIssuedComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'books-issued-list',
            component: BooksIssuedListComponent,
            canActivate:[AuthGuard]
          },
            {
            path: 'parents-list',
            component: ParentsComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'students-list',
            component: StudentsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'library-settings-list',
            component: LibrarySettingsComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'add-class-section',
            component: AddClassSectionComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path:'update-class-section/:classId/:sectionId',
            component:AddClassSectionComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'class-subject-list',
            component: ClassSubjectListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'add-class-subject',
            component: AddClassSubjectComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'update-class-subject/:classId/:sectionId',
            component: AddClassSubjectComponent,
            canActivate: [AuthGuard]
          }
          ,
          {
            path: 'assignment-evaluation-list',
            component: AssignmentEvaluationListComponent,
            canActivate: [AuthGuard]
          },{
            path:'add-assignment-evaluation',
            component: AddAssignmentEvaluationComponent,
            canActivate:[AuthGuard]
          },{
            path:'add-assignment-evaluation/:studentId/:assignId',
            component: AddAssignmentEvaluationComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'student-list',
            component: StudentListComponent,
            canActivate: [AuthGuard]
          },{
            path:'addStudent',
            component: AddStudentComponent,
            canActivate:[AuthGuard]
          },{
            path:'add-student/:userId',
            component: AddStudentComponent,
            canActivate:[AuthGuard]
          },{
            path:'topic-list',
            component: TopicListComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'add-topic',
            component: AddTopicComponent,
            canActivate: [AuthGuard]
          }
          ,{
            path:'add-topic/:topicId',
            component: AddTopicComponent,
            canActivate:[AuthGuard]
          },  
          {
            path:'notes-category-list',
            component: NotesCategoryListComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'add-topic',
            component: AddNotesCategoryComponent,
            canActivate: [AuthGuard]
          }
          ,{
            path:'add-notes-category/:notesCategoryId',
            component: AddNotesCategoryComponent,
            canActivate:[AuthGuard]
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
