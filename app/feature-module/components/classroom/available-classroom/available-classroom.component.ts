import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {ShareService} from "../../../services/share.service";
import {ClassroomService} from "../../../services/classroom.service";

@Component({
  selector: 'app-available-classroom',
  templateUrl: './available-classroom.component.html',
  styleUrls: ['./available-classroom.component.scss']
})
export class AvailableClassroomComponent implements OnInit {
  classroomList: Array<any> = new Array<any>();
  constructor(
    private location:Location,
    private router: Router,
    private classroomService: ClassroomService,
  ) {
  }

  ngOnInit(): void {
    this.listAllStudents();
  }

  onNavigateBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['features/add-classroom']);
  }

  listAllStudents() {
    this.classroomService.listAllClassroom().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        // response.forEach((f:any)=>{
        //   this.classroomList = f;
        // });
        this.classroomList =response;

        console.log("al ",this.classroomList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }


}
