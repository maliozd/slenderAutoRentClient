import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { MatCardModule, MatDatepickerModule,  MatIconModule, MatInputModule, MatNativeDateModule,   } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    CommonModule,
    RouterModule.forChild([{
      path : "", component: CarsComponent
    }]),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports : [
    CarsComponent, 
  ]
})
export class CarsModule { }
