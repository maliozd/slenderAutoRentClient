import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelperService: JwtHelperService) { }

  checkIdentity() {
    const token: string = localStorage.getItem("access_token");

    let isExpired: boolean;
    try {
      isExpired = this.jwtHelperService.isTokenExpired(token);
    }
    catch {
      isExpired = true;
    }
    _isAuthenticated = token != null && !isExpired;
  }
  get isAuthenticated(): boolean {
    return _isAuthenticated;
  }  
}
export let _isAuthenticated: boolean;