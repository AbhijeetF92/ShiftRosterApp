import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthDate } from '../models/employee';
import {MonthlyShift} from '../models/monthlyshift';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl ='https://localhost:7289/api/Employee/fortnight'
  private apiUrlforMonthlydetails ='https://localhost:7289/api/MonthlyShift/monthlyrosterdetails'


  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<MonthlyShift[]> 
  {
    return this.http.get<MonthlyShift[]>(this.apiUrl);
  }
  getMonthlyDetails(): Observable<MonthlyShift[]>
  {
    return this.http.get<MonthlyShift[]>(this.apiUrlforMonthlydetails)
  }
  
}
