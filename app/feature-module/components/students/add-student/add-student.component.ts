import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StudentService } from "../../../services/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
//   addStudentForm: FormGroup = new FormGroup({});
//   submitted: boolean = false;
//   image: File | null = null;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private studentService: StudentService,
//     // private toastService: ToastrService,
//   ) {}
//
//   ngOnInit(): void {
//     this.buildForm();
//   }
//
//   buildForm() {
//     this.addStudentForm = this.formBuilder.group({
//       name: ['', [Validators.required, Validators.minLength(4)]],
//       email: ['', [Validators.required, Validators.email]],
//       rollNo: ['', Validators.required],
//       address: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       classFaculty: ['', Validators.required],
//       // image: [null, Validators.required]
//     });
//   }
//
//   get form(): { [key: string]: AbstractControl } {
//     return this.addStudentForm.controls;
//   }
//
//   onImageChange(event: any): void {
//     this.image = event.target.files[0];
//   }
//
//   addStudent() {
//     this.submitted = true;
//     if (this.addStudentForm.invalid) {
//       return;
//     }
//     this.studentService.addStudent(this.addStudentForm.value ).subscribe(
//       {
//         next: (value: any) => {
//           console.log('classroom value',value);
//           this.addStudentForm.reset();
//           console.log("User Login Successful")
//           // this.toastService.success("Login","login success full")
//           this.router.navigate(['/features/home']);
//         }, error: (err: any) => {
//           // this.toastService.error("user error", 'Error on the Logging the customers')
//           this.router.navigate(['/features/home']);
//         }
//       });
//   }
// }

  addStudentForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  image: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addStudentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      rollNo: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      classFaculty: ['', Validators.required],
      image: [null]  // No Validators here for the image
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.addStudentForm.controls;
  }

  onImageChange(event: any): void {
    this.image = event.target.files[0];  // Capture the selected image
  }

  addStudent() {
    this.submitted = true;
    if (this.addStudentForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.addStudentForm.get('name')?.value);
    formData.append('email', this.addStudentForm.get('email')?.value);
    formData.append('rollNo', this.addStudentForm.get('rollNo')?.value);
    formData.append('address', this.addStudentForm.get('address')?.value);
    formData.append('phoneNumber', this.addStudentForm.get('phoneNumber')?.value);
    formData.append('classFaculty', this.addStudentForm.get('classFaculty')?.value);

    if (this.image) {
      formData.append('imageFile', this.image);  // Add image file to the form data
    }

    this.studentService.addStudent(formData).subscribe({
      next: (value: any) => {
        console.log('Student added:', value);
        this.addStudentForm.reset();
        this.router.navigate(['/features/home']);
      },
      error: (err: any) => {
        console.error('Error adding student:', err);
      }
    });
  }
}

