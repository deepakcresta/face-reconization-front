import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  error(arg: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;
  addStudentEndApiPoint: string = '/students';

  constructor(private httpClient: HttpClient) {
  }


  // Adding the stock
  addStudent(studentData: any,): Observable<any> {
    console.log('sdfs');
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.addStudentEndApiPoint),
      studentData
    );
  }
}
