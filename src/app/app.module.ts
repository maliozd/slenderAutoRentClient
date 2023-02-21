import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarsModule } from './cars/cars.module';
import { HomeModule } from './home/home.module';
import { JwtModule } from '@auth0/angular-jwt'
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarsModule,
    HomeModule,
    LoginModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("access_token"),
        allowedDomains: ["localhost:7038"]
      }
    })
  ],
  providers: [
    {
      provide: "baseUrl", useValue: "https://localhost:7038/api", multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
