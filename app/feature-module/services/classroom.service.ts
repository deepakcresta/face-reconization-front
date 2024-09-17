import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {


  error(arg: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;
  addClassRoomEndApiPoint: string = '/classroom';


  constructor(private httpClient: HttpClient) {
  }


  addClassroom(classroom: any): Observable<any> {
    console.log("heram ta", classroom);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.addClassRoomEndApiPoint),
      classroom
    );
  }
  listAllClassroom(): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.addClassRoomEndApiPoint));
  }

}
