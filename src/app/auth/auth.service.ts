import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private socialAuthService: SocialAuthService) { }

  getLoggedUser(): Observable<SocialUser> {
    return this.socialAuthService.authState;
  }
}
