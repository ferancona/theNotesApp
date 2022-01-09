import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';


class mockSocialAuthService {
  authSate: Observable<SocialUser> = new Observable( observer => {
    observer.next(
      {
        id: "110920650884333962584",
        name: "Fernando Ancona",
        email: "f.anconac@gmail.com",
        photoUrl: "https://lh3.googleusercontent.com/a/AATXAJycDf2k4Fvz6j03gFIuFFd9I4crE2KDaCvBG2f2=s96-c",
        firstName: "Fernando",
        lastName: "Ancona",
        authToken: "ya29.a0ARrdaM_xWm6MzczLgA8eV4u5WHLXX2jTwtDbwYZCqcX7CpBGBNVYeRsOCrkxDlnkj2ahQ73RRNsmDvANp_5ozQJLHhFDXH3fsG6kvdVOYjo6bvMP0XHBW0c2ZuEiKah2PlRRz76GrJUl8_If8EDNvi88DylYgg",
        idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwMWMxYWJlMjQ5MjY5ZjcyZWY3Y2EyNjEzYTg2YzlmMDVlNTk1NjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODAyOTgxNDI3MTItc2ZkM3Zsa29lZTA0cm51ZGJuMHFydGIyOTEwZWgzM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MDI5ODE0MjcxMi1zZmQzdmxrb2VlMDRybnVkYm4wcXJ0YjI5MTBlaDMzYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDkyMDY1MDg4NDMzMzk2MjU4NCIsImVtYWlsIjoiZi5hbmNvbmFjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoieXE5QmQyZkZmTll2NE1kSzdKS21YdyIsIm5hbWUiOiJGZXJuYW5kbyBBbmNvbmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeWNEZjJrNEZ2ejZqMDNnRkl1RkZkOUk0Y3JFMktEYUN2QkcyZjI9czk2LWMiLCJnaXZlbl9uYW1lIjoiRmVybmFuZG8iLCJmYW1pbHlfbmFtZSI6IkFuY29uYSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjQxNzIzMTMyLCJleHAiOjE2NDE3MjY3MzIsImp0aSI6ImY3MTQ2ZGQ0ODE1YjI3OWQ2MWI1ODBmOWMzMjc5NjNjMWQ1OTU2OWUifQ.tdEVabNEbU80FeoMYoQZ7dLKTSQG2BTeAZFrZWMUltSr27PxKaK1Y71vhMwvZMCpLO-c2USlxkfVbe9LAmCRkqCdZb8vhz6psvd0Nu0ZAb8hY3mX7Wz2phWDIYgYX13kBQ7hDBSNJfcWQxAUXyQKGL0qlELAbXzqV_JbCGolHdGRLcm6WfzHg12Qzotr2JJamrr3FlOUV-4zLmekSMFlf3Bx5LBqH-PUwmBIetxOQ_sUiCZVclELnBPDxItujrYuHKGcHrokIsLcoSBg1FGdCglzb1BDVFk9_BFeQQLq7xYAz1rJ-6LP3vWITPfhdJtggsYh7sDtDNHeJ3qqt-fKKA",
        provider: "GOOGLE",
        response: {
            "token_type": "Bearer",
            "access_token": "ya29.a0ARrdaM_xWm6MzczLgA8eV4u5WHLXX2jTwtDbwYZCqcX7CpBGBNVYeRsOCrkxDlnkj2ahQ73RRNsmDvANp_5ozQJLHhFDXH3fsG6kvdVOYjo6bvMP0XHBW0c2ZuEiKah2PlRRz76GrJUl8_If8EDNvi88DylYgg",
            "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
            "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAliOjtBqXE2YOmxOle3XJEIkDPixHSqVT2k7vea2rF99CthzGCrz3t7R2iUZCVIm2vc16LQ",
            "expires_in": 3599,
            "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwMWMxYWJlMjQ5MjY5ZjcyZWY3Y2EyNjEzYTg2YzlmMDVlNTk1NjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODAyOTgxNDI3MTItc2ZkM3Zsa29lZTA0cm51ZGJuMHFydGIyOTEwZWgzM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MDI5ODE0MjcxMi1zZmQzdmxrb2VlMDRybnVkYm4wcXJ0YjI5MTBlaDMzYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDkyMDY1MDg4NDMzMzk2MjU4NCIsImVtYWlsIjoiZi5hbmNvbmFjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoieXE5QmQyZkZmTll2NE1kSzdKS21YdyIsIm5hbWUiOiJGZXJuYW5kbyBBbmNvbmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeWNEZjJrNEZ2ejZqMDNnRkl1RkZkOUk0Y3JFMktEYUN2QkcyZjI9czk2LWMiLCJnaXZlbl9uYW1lIjoiRmVybmFuZG8iLCJmYW1pbHlfbmFtZSI6IkFuY29uYSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjQxNzIzMTMyLCJleHAiOjE2NDE3MjY3MzIsImp0aSI6ImY3MTQ2ZGQ0ODE1YjI3OWQ2MWI1ODBmOWMzMjc5NjNjMWQ1OTU2OWUifQ.tdEVabNEbU80FeoMYoQZ7dLKTSQG2BTeAZFrZWMUltSr27PxKaK1Y71vhMwvZMCpLO-c2USlxkfVbe9LAmCRkqCdZb8vhz6psvd0Nu0ZAb8hY3mX7Wz2phWDIYgYX13kBQ7hDBSNJfcWQxAUXyQKGL0qlELAbXzqV_JbCGolHdGRLcm6WfzHg12Qzotr2JJamrr3FlOUV-4zLmekSMFlf3Bx5LBqH-PUwmBIetxOQ_sUiCZVclELnBPDxItujrYuHKGcHrokIsLcoSBg1FGdCglzb1BDVFk9_BFeQQLq7xYAz1rJ-6LP3vWITPfhdJtggsYh7sDtDNHeJ3qqt-fKKA",
            "session_state": {
                "extraQueryParams": {
                    "authuser": "0"
                }
            },
            "first_issued_at": 1641723132409,
            "expires_at": 1641726731409,
            "idpId": "google"
        },
        authorizationCode: "whatever"
      }
    );
    observer.complete();
  });
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public mockSocialAuthService: mockSocialAuthService = new mockSocialAuthService();

  constructor( private socialAuthService: SocialAuthService ) { }

  getLoggedUser(): Observable<SocialUser> {
    return this.socialAuthService.authState;
    // return this.mockSocialAuthService.authSate;
  }
}
