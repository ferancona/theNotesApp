import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './notes/pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   component: NotesCardComponent
  // }
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
