import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public authService : AuthService, private router: Router) {
    authService.checkIdentity();
    console.log(authService.isAuthenticated)
  }
  
  signOut(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    this.authService.checkIdentity();
    this.router.navigate([""])
  }
  ngOnInit(): void {}
  title = 'slenderAutoRentClient';
}
