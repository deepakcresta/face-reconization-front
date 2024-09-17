import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  error(arg: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;



  constructor(private httpClient: HttpClient) {
  }

  listAllStudents(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/students');
  }

}
