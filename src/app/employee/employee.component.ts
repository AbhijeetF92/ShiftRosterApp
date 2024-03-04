import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';;
import { DataService } from '../Services/data.service';
import { FortnightService } from '../Services/fortnight.service';
import { MonthDate } from '../models/employee';
import { MonthShiftDetails, MonthlyShift } from '../models/monthlyshift';
import { response } from 'express';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit
{

  public monthDates : MonthDate[] = [];
  public resultMonth: MonthDate[] = [];
  monthDataList: MonthDate[] = [];
  getEmployeeResult: MonthDate[]=[];
  submitted: boolean = false;
  exportToExcel: boolean=false;
  editingRow: number = -1;
  public dataAfterselection!: Array<MonthDate>;
  public _MonthlyShift!: Array<MonthlyShift>;
  public _MonthShiftDetails:MonthShiftDetails[] = [];
  public monthDatares: MonthlyShift = new MonthlyShift();


  @ViewChild('exportTable') exportTable!: ElementRef;

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
          this._MonthlyShift=res;
          console.log("Post API Responses", this._MonthlyShift);
      });
  }

  SubmitData()
  {
    var request= new MonthlyShift();
    
   console.log("Data before sending Post request", this.monthDatares);

    const endpoints="https://localhost:7289/api/Employee/AddEmployee";
    this._httpClient.post<MonthlyShift>(endpoints,this.monthDatares).subscribe({
      next:(response)=>{
        this.monthDatares=this.monthDatares;
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
       
      const shiftdetails:MonthShiftDetails=new MonthShiftDetails();
      console.log('Selected Shift:', selectedShift);
      console.log('Employee ID:', employeeId);
      console.log('Date:', date);

      shiftdetails.date=date;
      shiftdetails.shift=selectedShift;
      this._MonthShiftDetails.push(shiftdetails);
      this.monthDatares.name=employeeId;
      this.monthDatares.id="";
      this.monthDatares._monthShiftData=this._MonthShiftDetails;      

      //this.monthDataList.push(monthDatares);
      console.log("Result of response:",this.monthDatares);
      
   }
  EnableEditing(index: number)
  {
      this.editingRow = index;
      this.submitted = false;
  }
  ExportToExcel(): void 
  {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.exportTable.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'exported_data.xlsx');
      //this.exportToExcel=true;
  }
}
  

