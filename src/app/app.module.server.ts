import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { EmployeeComponent } from './employee/employee.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MonthlyshiftComponent } from './monthlyshift/monthlyshift.component';
import { AppComponent } from './app/app.component';

//import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    FormsModule 
  ],
  //bootstrap: [EmployeeComponent],
  //bootstrap: [MonthlyshiftComponent],
  bootstrap: [AppComponent],

})
export class AppServerModule {}
