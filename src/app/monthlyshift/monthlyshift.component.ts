import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MonthlyShift } from '../models/monthlyshift';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-monthlyshift',
  templateUrl: './monthlyshift.component.html',
  styleUrl: './monthlyshift.component.css'
})
export class MonthlyshiftComponent 
{
  constructor(private _dataService:DataService)
  {
    
  }

  displayedColumns: string[] = ['name', 'shift', 'onCall', 'location','month'];
  dataSource: any[] = [];
  isRowInEditMode: boolean[] = [];

  ngOnInit(): void {
    this._dataService.getMonthlyDetails().subscribe(data => {
      this.dataSource = data;
      console.log("Abhijeet",this.dataSource);
    });
    this.dataSource.forEach(() => {
      this.isRowInEditMode.push(false); // Initialize all rows as not in edit mode
    });
  }

  toggleEditMode(index: number) {
    this.isRowInEditMode[index] = !this.isRowInEditMode[index];
  }

  onSubmit(data: any) {
    const endpoints="https://localhost:7289/api/MonthlyShift/SubmitMonthlyData";
    // this._dataService.submitData(data).subscribe(response => {
    //   // Handle response if needed
    //   console.log('Data submitted successfully:', response);
    // }, error => {
    //   // Handle error
    //   console.error('Error submitting data:', error);
    // });
  }


}
