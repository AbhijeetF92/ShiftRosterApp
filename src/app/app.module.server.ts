import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { EmployeeComponent } from './employee/employee.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    FormsModule 
  ],
  bootstrap: [EmployeeComponent],
})
export class AppServerModule {}
