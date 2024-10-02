import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassroomService} from "../../../services/classroom.service";
import {TeacherService} from "../../../services/teacher.service";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  addTeacherForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private teacherService: TeacherService
    // private toastService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addTeacherForm = this.formBuilder.group({
      name: [undefined, Validators.compose([Validators.required])],
      email: [undefined, Validators.compose([Validators.required])],
      address: [undefined, Validators.compose([Validators.required])],
      phoneNumber: [undefined, Validators.compose([Validators.required])],
      faculty: [undefined, Validators.compose([Validators.required])],
      subject: [undefined, Validators.compose([Validators.required])],
    })

  }

  get form(): { [key: string]: AbstractControl } {
    return this.addTeacherForm.controls
  }


  addTeacher() {
    this.submitted = true;
    if (this.addTeacherForm.invalid) {
      return;
    }
    this.teacherService.addTeacher(this.addTeacherForm.value).subscribe(
      {
        next: (value: any) => {
          this.addTeacherForm.reset();
          console.log("User Login Successful")
          // this.toastService.success("Login","login success full")
          this.router.navigate(['/features/teacher-list']);
        }, error: (err: any) => {
          // this.toastService.error("user error", 'Error on the Logging the customers')
          this.router.navigate(['/features/teacher-list']);
        }
      });
  }

  onNavigateToRegister() {
    this.router.navigate(['/register']);
  }
}
