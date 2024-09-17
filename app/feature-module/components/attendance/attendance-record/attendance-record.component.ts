import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../../services/share.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-attendance-record',
  templateUrl: './attendance-record.component.html',
  styleUrls: ['./attendance-record.component.scss']
})
export class AttendanceRecordComponent implements OnInit {
  studentList: Array<any> = new Array<any>();
  constructor(
    private location:Location,
    private router: Router,
    private sharedService: ShareService,
  ) {
  }

  ngOnInit(): void {
    this.listAllStudents();
  }

  onNavigateBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['features/add-student']);
  }

  listAllStudents() {
    this.sharedService.listAllStudents().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        // response.forEach((f:any)=>{
        //   this.studentList = f;
        // });
        this.studentList =response;

        console.log("al ",this.studentList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }


}
