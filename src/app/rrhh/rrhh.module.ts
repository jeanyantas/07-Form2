import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegistrationFormComponent } from './components/employee-registration-form/employee-registration-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RrhhRoutingModule } from './rrhh-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeRegistrationFormComponent,
    NavbarComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RrhhModule { }
