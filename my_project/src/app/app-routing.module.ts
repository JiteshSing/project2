import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DocumentComponent } from './document/document.component';

import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { LeadComponent } from './lead/lead.component';
import { LeadListComponent } from './lead-list/lead-list.component';

import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

// import { IssueComponent } from './issue/issue.component';
// import { IssueListComponent } from './issue-list/issue-list.component';

import { OwnerComponent } from './owner/owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { StaffmemberComponent } from './staffmember/staffmember.component';
import { StaffmemberListComponent } from './staffmember-list/staffmember-list.component';
import { PositionComponent } from './position/position.component';
import { PositionListComponent } from './position-list/position-list.component';
import { MedicationComponent } from './medication/medication.component';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { PortfoliomanagementComponent } from './portfoliomanagement/portfoliomanagement.component';
import { PortfoliomanagementListComponent } from './portfoliomanagement-list/portfoliomanagement-list.component'; 
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MarketComponent } from './market/market.component';
import { MarketListComponent } from './market-list/market-list.component';





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component:RegistrationComponent },
  { path: 'menu', component: MenuComponent },
  { path : 'welcome', component:WelcomeComponent},
  { path : 'user', component:UserComponent},
  { path : 'user/:id', component:UserComponent},
  { path : 'userlist', component:UserListComponent },
  { path : 'college', component:CollegeComponent},
  { path : 'college/:id', component:CollegeComponent},
  { path : 'collegelist', component:CollegeListComponent},
  { path : 'course', component:CourseComponent},
  { path : 'course/:id', component:CourseComponent},
  { path : 'courselist', component:CourseListComponent},
  { path : 'marksheet', component:MarksheetComponent},
  { path : 'marksheetlist', component:MarksheetListComponent },
  { path : 'meritlist', component:MeritlistComponent },
  { path : 'role', component:RoleComponent},
  { path : 'rolelist', component:RoleListComponent},
  { path : 'role/:id', component:RoleComponent},
  { path : 'student', component:StudentComponent },
  { path : 'studentlist', component:StudentListComponent },
  { path : 'student/:id', component:StudentComponent },
  { path : 'subject', component:SubjectComponent },
  { path : 'subjectlist', component:SubjectListComponent },
  { path : 'subject/:id', component:SubjectComponent },
  { path : 'addfaculty', component:AddFacultyComponent },
  { path : 'addfacultylist', component:AddfacultyListComponent },
  { path : 'addfaculty/:id', component:AddFacultyComponent },
  { path : 'timetable', component:TimetableComponent },
  { path : 'timetablelist', component:TimetableListComponent },
  { path : 'timetable/:id', component:TimetableComponent },
  { path : 'changepassword', component:ChangepasswordComponent },
  { path : 'forgetpassword', component:ForgetpasswordComponent },
  { path : 'logout', component:MenuComponent},
  { path : 'vehicle',component:VehicleComponent},
  { path:'vehicle/:id',component:VehicleComponent},
  { path: 'vehiclelist',component:VehicleListComponent},
  { path : 'project',component:ProjectComponent},
  { path:'project/:id',component:ProjectComponent},
  { path: 'projectlist',component:ProjectListComponent},
  { path : 'lead',component:LeadComponent},
  { path:'lead/:id',component:LeadComponent},
  { path: 'leadlist',component:LeadListComponent},
  { path : 'order',component:OrderComponent},
  { path:'order/:id',component:OrderComponent},
  { path: 'orderlist',component:OrderListComponent},
  { path : 'supplier',component:SupplierComponent},
  { path:'supplier/:id',component:SupplierComponent},
  { path: 'supplierlist',component:SupplierListComponent},
  // { path : 'issue',component:IssueComponent},
  // { path:'issue/:id',component:IssueComponent},
  // { path: 'issuelist',component:IssueListComponent},
  { path : 'owner',component:OwnerComponent},
  { path:'owner/:id',component:OwnerComponent},
  { path: 'ownerlist',component:OwnerListComponent},
  { path : 'wishlist',component:WishlistComponent},
  { path:'wishlist/:id',component:WishlistComponent},
  { path: 'wishlistlist',component:WishlistListComponent},
  { path: 'doctor',component:DoctorComponent},
  { path:'doctor/:id',component:DoctorComponent},
  { path: 'doctorlist',component:DoctorListComponent},
  { path: 'employee',component:EmployeeComponent},
  { path:'employee/:id',component:EmployeeComponent},
  { path: 'employeelist',component:EmployeeListComponent},
  { path: 'initiative',component:InitiativeComponent},
  { path:'initiative/:id',component:InitiativeComponent},
  { path: 'initiativelist',component:InitiativeListComponent},
  { path: 'task',component:TaskComponent},
  { path:'task/:id',component:TaskComponent},
  { path: 'tasklist',component:TaskListComponent},
  { path: 'contact',component:ContactComponent},
  { path:'contact/:id',component:ContactComponent},
  { path: 'contactlist',component:ContactListComponent},
  { path: 'staffmember',component:StaffmemberComponent},
  { path:'staffmember/:id',component:StaffmemberComponent},
  { path: 'staffmemberlist',component:StaffmemberListComponent},
  { path: 'position',component:PositionComponent},
  { path:'position/:id',component:PositionComponent},
  { path: 'positionlist',component:PositionListComponent},
  { path: 'medication',component:MedicationComponent},
  { path:'medication/:id',component:MedicationComponent},
  { path: 'medicationlist',component:MedicationListComponent},
  { path: 'portfoliomanagement',component:PortfoliomanagementComponent},
  { path:'portfoliomanagement/:id',component:PortfoliomanagementComponent},
  { path: 'portfoliomanagementlist',component:PortfoliomanagementListComponent},
  { path: 'customer',component:CustomerComponent},
  { path:'customer/:id',component:CustomerComponent},
  { path: 'customerlist',component:CustomerListComponent},
  { path: 'market',component:MarketComponent},
  { path:'market/:id',component:MarketComponent},
  { path: 'marketlist',component:MarketListComponent},
  { path : '**', component:DocumentComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
