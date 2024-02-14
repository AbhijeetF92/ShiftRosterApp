import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthDate } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl ='https://localhost:7289/api/Employee/fortnight'


  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<MonthDate[]> 
  {
    return this.http.get<MonthDate[]>(this.apiUrl);
  }
  
}
