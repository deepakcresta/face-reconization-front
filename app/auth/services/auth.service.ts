import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LoginModel} from "../model/login-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }
  loginUser(data: LoginModel): Observable<any>{
    return  this.httpClient.post(environment.baseUrl+ '/users', data )
  }
}
