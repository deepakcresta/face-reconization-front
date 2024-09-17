import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { AttendanceRecordComponent } from './components/attendance/attendance-record/attendance-record.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AddClassroomComponent} from "./components/classroom/add-classroom/add-classroom.component";
import {AddTeacherComponent} from "./components/teacher/add-teacher/add-teacher.component";
import {AddStudentComponent} from "./components/students/add-student/add-student.component";
import { AvailableClassroomComponent } from './components/classroom/available-classroom/available-classroom.component';
import { AvailableTeacherComponent } from './components/teacher/available-teacher/available-teacher.component';
import { TodayAttendanceComponent } from './components/attendance/today-attendance/today-attendance.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    AttendanceRecordComponent,
    AddClassroomComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AvailableClassroomComponent,
    AvailableTeacherComponent,
    TodayAttendanceComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FeatureModuleModule { }
