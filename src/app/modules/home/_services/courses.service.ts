import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private domain = '';

  constructor(private http: HttpClient){}
  
  // getData(): Observable<DataModelResponse>{
  //     return this.http.get<CourseDataModelResponsesData>
  //     (`domain`)
  // }
}
