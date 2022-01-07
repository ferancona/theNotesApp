import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  user!: SocialUser;

  constructor( private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService
    ) {

  }

  ngOnInit(): void {
    // this.socialAuthService.authState
    //   .subscribe( socialUser => this.user = socialUser );
    // console.log(this.user)
    this.authService.getLoggedUser()
      .subscribe( socialUser => this.user = socialUser );
  }

  logout(): void {
    this.socialAuthService.signOut().then(() => this.router.navigate(['login']));
  }

}
