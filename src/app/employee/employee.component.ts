import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';;
import { DataService } from '../Services/data.service';
import { FortnightService } from '../Services/fortnight.service';
import { MonthDate } from '../models/employee';
import { response } from 'express';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit
{

  public monthDates! : Array<MonthDate>;
  public resultMonth!: Array<MonthDate>;
  monthDataList: MonthDate[] = [];
  submitted: boolean = false;
  exportToExcel: boolean=false;
  editingRow: number = -1;
  
  //letters: string[] = ['M', 'A', 'G'];  
  public dataAfterselection!: Array<MonthDate>;

  constructor(private _fortnightService: FortnightService,private _dataService:DataService, private _httpClient:HttpClient) 
  {
    
  }

  ngOnInit(): void {
    const originalDates = this._fortnightService.getMonthDates();
    this.GetUserData();

    this.monthDates = originalDates.map(date => ({
      formattedDate: this.formatDate(date),
      selectedLetter: "",
      employeeID: "",
      id:""
      }));  
  }

  private formatDate(date: string): string 
  {
    const options = { day: '2-digit', month: 'short' } as const;
    return new Date(date).toLocaleDateString('en-US', options);
  }

  private GetUserData():void
  {
    
    this._dataService.getEmployeeData().subscribe((res) =>
      {
          this.resultMonth=res;
          console.log("Post API Responses",this.resultMonth);
      });
  }

  SubmitData()
  {
    var request= new MonthDate();
    
    //const jsonResult = JSON.stringify(this.monthDataList);

   console.log("Data before sending Post request", this.monthDataList);

    const endpoints="https://localhost:7289/api/Employee/AddEmployee";
    this._httpClient.post<MonthDate>(endpoints,this.monthDataList).subscribe({
      next:(response)=>{
        this.monthDates=this.monthDates;
      },
      error: (error) => {
        this.handleError(error);        
      }      
    });    

    this.monthDataList = [];
    this.submitted = true;
  }
    
    private handleError(error: any): void {
       console.error('API error:', error);
    }

    onSelectionChange(selectedShift: string, employeeId: string, date: string):any 
    {
      const monthDatares: MonthDate = new MonthDate();
      console.log('Selected Shift:', selectedShift);
      console.log('Employee ID:', employeeId);
      console.log('Date:', date);

      monthDatares.formattedDate=date;
      monthDatares.employeeID=employeeId;
      monthDatares.selectedLetter=selectedShift; 
      monthDatares.id="";  
      this.monthDataList.push(monthDatares);
      console.log("Result of response:",this.monthDataList);
      
    }
    EnableEditing(index: number)
    {
      this.editingRow = index;
      this.submitted = false;
    }
    ExportToExcel()
    {
      this.exportToExcel=true; 
    }
}
  

