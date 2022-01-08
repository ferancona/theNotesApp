import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  heading: string = 'TheNotesApp'

  titles: Record<string, string> =  {
    'home': 'My Notes',
    'shared': 'Shared with Me',
    'settings': 'Settings',
  }

  constructor( private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
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

  updateHeading(heading: string) {
    // console.log(this.router.url)
    // const endpoint = this.router.url.split('/').pop() || '';
    // this.pageTitle = this.titles[endpoint] ? this.titles[endpoint] : this.titles['home'];

    this.heading = heading;
  }

}
