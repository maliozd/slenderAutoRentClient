import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserAuthService } from '../services/models/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userAuthService : UserAuthService,private authService : AuthService,private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  async login(usernameOrEmail: string, password: string) {
    await this.userAuthService.login({usernameOrEmail, password}, () => {
      this.authService.checkIdentity();
      const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
      if (returnUrl) {
        this.router.navigate([returnUrl])
        console.log(returnUrl)
      }
      else {
        this.router.navigate([""])
      }
    })
  }

}
