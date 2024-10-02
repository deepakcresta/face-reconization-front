import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl: string = environment.baseUrl;
  addStudentEndApiPoint = '/images/upload'; // Set your base URL
  imageList = '/images/list'; // Set your base URL

  constructor(private httpClient: HttpClient) {}

  // Upload student data including the image
  uploadImage(studentData: FormData): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.addStudentEndApiPoint),
      studentData
    );
  }

  getAllImages(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}${this.imageList}`);
  }
}
