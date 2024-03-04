import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MonthlyshiftComponent } from './monthlyshift/monthlyshift.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {path: 'app', component:AppComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'monthlyshift', component: MonthlyshiftComponent },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    MonthlyshiftComponent,
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration()
  ],
  //bootstrap: [EmployeeComponent],
  // bootstrap: [MonthlyshiftComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
