import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginModel} from "../model/login-model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  title: string = ' Restaurant Inventory System';
  appVersion: number = 0.1;
  public currentYear = new Date().getFullYear();
  userName1: string = "Deepak"
  userName2: string = "selena"
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    // private toastService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      userName: [undefined, Validators.compose([Validators.required])],
      password: [undefined, Validators.compose([Validators.required])]
    })

  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }


  onUserLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // if ((this.loginForm?.value?.userName === this.userName1) || (this.loginForm?.value?.userName === this.userName2)) {
      this.authService.loginUser(this.loginForm.value as LoginModel).subscribe(
        {
          next: (value: any) => {
            this.loginForm.reset();
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
