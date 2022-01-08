import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NotesModule } from './notes/notes.module';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NotesModule,
    SocialLoginModule,
    AuthModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('80298142712-sfd3vlkoee04rnudbn0qrtb2910eh33b.apps.googleusercontent.com') // your client id
          }
        ]
      }
    },
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
