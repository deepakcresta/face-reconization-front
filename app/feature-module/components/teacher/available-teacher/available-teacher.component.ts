import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {ShareService} from "../../../services/share.service";
import {TeacherService} from "../../../services/teacher.service";

@Component({
  selector: 'app-available-teacher',
  templateUrl: './available-teacher.component.html',
  styleUrls: ['./available-teacher.component.scss']
})
export class AvailableTeacherComponent implements OnInit {
  teacherList: Array<any> = new Array<any>();



  constructor(
    private location:Location,
    private router: Router,
    private teacherService: TeacherService,
  ) {
  }

  ngOnInit(): void {
    this.listAllClassrooms();
  }

  onNavigateBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['features/add-student']);
  }

  listAllClassrooms() {
    this.teacherService.lisAllClassrooms().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        // response.forEach((f:any)=>{
        //   this.teacherList = f;
        // });
        this.teacherList =response;

        console.log("al ",this.teacherList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }


}
