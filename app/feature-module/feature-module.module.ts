import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { AttendanceRecordComponent } from './components/attendance/attendance-record/attendance-record.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddClassroomComponent} from "./components/classroom/add-classroom/add-classroom.component";
import {AddTeacherComponent} from "./components/teacher/add-teacher/add-teacher.component";
import {AddStudentComponent} from "./components/students/add-student/add-student.component";
import { AvailableClassroomComponent } from './components/classroom/available-classroom/available-classroom.component';
import { AvailableTeacherComponent } from './components/teacher/available-teacher/available-teacher.component';
import { TodayAttendanceComponent } from './components/attendance/today-attendance/today-attendance.component';
import { StaffComponent } from './components/staff/staff.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    AttendanceRecordComponent,
    AddClassroomComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AvailableClassroomComponent,
    AvailableTeacherComponent,
    TodayAttendanceComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FeatureModuleModule { }
