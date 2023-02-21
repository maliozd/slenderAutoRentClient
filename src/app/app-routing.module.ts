import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
 path : "", component : HomeComponent
  },
  {
    path: 'cars', loadChildren: () => import('./cars/cars.module').then(module => module.CarsModule)
  },
  {
    path : "login", loadChildren: () => import('./login/login.module').then(module =>module.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
