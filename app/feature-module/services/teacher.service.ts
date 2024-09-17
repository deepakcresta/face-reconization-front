import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  error(arg: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;
  addTeacherEndApiPoint: string = '/teacher';



  constructor(private httpClient: HttpClient) {
  }


  // Adding the stock
  addTeacher(classroom: any): Observable<any> {
    console.log("heram ta", classroom);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.addTeacherEndApiPoint),
      classroom
    );
  }
  lisAllClassrooms(): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.addTeacherEndApiPoint));
  }



  listAllStocks(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'stock');
  }

  deleteStockById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + 'stock/' + `${id}`);
  }
  lisAllTeachers(): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.addTeacherEndApiPoint));
  }

}
