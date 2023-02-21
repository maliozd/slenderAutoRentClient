import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { JWT_Token } from 'src/app/contracts/jwt-token/jwt-token';
import { UserLoginRequestObj } from 'src/app/request-objects/user-login-request-obj';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClientService : HttpClientService) { }

  async login(userLoginRequest : UserLoginRequestObj, callbackFunction?: () => void) : Promise<any>{

    const observable : Observable<any | JWT_Token> = this.httpClientService.post({
      controller : "auth",
      action: "login",
    },{
      usernameOrEmail : userLoginRequest.usernameOrEmail,
      password : userLoginRequest.password
    })

    const tokenResponse : JWT_Token = (await firstValueFrom(observable)).token as JWT_Token;
    localStorage.setItem("access_token", tokenResponse.accessToken);
    localStorage.setItem("refresh_token", tokenResponse.refreshToken);
    callbackFunction();
  }
}
