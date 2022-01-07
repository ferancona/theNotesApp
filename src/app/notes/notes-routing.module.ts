import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: NotesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      // {
      //   path: ':id',
      //   component:
      // },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotesRoutingModule { }
