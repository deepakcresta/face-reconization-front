import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureModuleComponent} from './feature-module.component';
import {DashboardComponent} from "../base-layout-module/dashboard/dashboard.component";
import {BaseLayoutModuleComponent} from "../base-layout-module/base-layout-module.component";
import {AddClassroomComponent} from "./components/classroom/add-classroom/add-classroom.component";
import {AddStudentComponent} from "./components/students/add-student/add-student.component";
import {AddTeacherComponent} from "./components/teacher/add-teacher/add-teacher.component";
import {AttendanceRecordComponent} from "./components/attendance/attendance-record/attendance-record.component";
import {AvailableClassroomComponent} from "./components/classroom/available-classroom/available-classroom.component";
import {AvailableTeacherComponent} from "./components/teacher/available-teacher/available-teacher.component";
import {TodayAttendanceComponent} from "./components/attendance/today-attendance/today-attendance.component";

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutModuleComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'add-classroom',
        component: AddClassroomComponent
      },
      {
        path: 'add-student',
        component: AddStudentComponent
      },
      {
        path: 'add-teacher',
        component: AddTeacherComponent,
      },
      {
        path: 'teacher-list',
        component: AvailableTeacherComponent,
      },
      {
        path: 'classroom-list',
        component: AvailableClassroomComponent
      },
      {
        path: 'student-attendance',
        component: AttendanceRecordComponent
      },
      {
        path: 'today-attendance',
        component: TodayAttendanceComponent
      },
    ]
  },
  {
    path: '',
    component: FeatureModuleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule {
}
