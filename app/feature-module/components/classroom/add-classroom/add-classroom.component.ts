import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassroomService} from "../../../services/classroom.service";
import {AuthService} from "../../../../auth/services/auth.service";
import {LoginModel} from "../../../../auth/model/login-model";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit {

  addClassroomForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  ClassroomId = [
    {
      key: 'FIRST_SEMESTER', value: '1'
    },
    {
      key: 'SECOND_SEMESTER', value: '2'
    },
    {
      key: 'THIRD_SEMESTER', value: '3'
    },
    {
      key: 'FOURTH_SEMESTER', value: '4'
    },
    {
      key: 'FIFTH_SEMESTER', value: '5'
    },
    {
      key: 'SECOND_SEMESTER', value: '6'
    },
    {
      key: 'SEVEN_SEMESTER', value: '7'
    },
    {
      key: 'EIGHT_SEMESTER', value: '8'
    },


  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private classroomService: ClassroomService,
    // private toastService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addClassroomForm = this.formBuilder.group({
      name: [undefined, Validators.compose([Validators.required])],
      faculty: [undefined, Validators.compose([Validators.required])],
      section: [undefined, Validators.compose([Validators.required])],
      classTeacherName: [undefined, Validators.compose([Validators.required])],
      // studentIds:[undefined, Validators.compose([Validators.required])],
      // teacherId:[undefined, Validators.compose([Validators.required])],

    })

  }

  get form(): { [key: string]: AbstractControl } {
    return this.addClassroomForm.controls
  }


  addClassroom() {
    this.submitted = true;
    if (this.addClassroomForm.invalid) {
      return;
    }
    this.classroomService.addClassroom(this.addClassroomForm.value).subscribe(
      {
        next: (value: any) => {
          console.log('classroom value', value);
          this.addClassroomForm.reset();
          console.log("User Login Successful")
          // this.toastService.success("Login","login success full")
          this.router.navigate(['/features/home']);
        }, error: (err: any) => {
          // this.toastService.error("user error", 'Error on the Logging the customers')
          this.router.navigate(['/features/home']);
        }
      });

    // }
    // else{
    //   // console.log('sdfsd')
    //   this.toastService.error("Invalid credentials")
    //   // this.toastService.error("Login","Invalid user errors")
    //
    //
    // }
  }

  onNavigateToRegister() {
    this.router.navigate(['/register']);
  }
}
