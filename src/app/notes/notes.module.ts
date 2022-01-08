import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { HomeComponent } from './pages/home/home.component';
import { NotesRoutingModule } from './notes-routing.module';

import { MaterialModule } from '../material/material.module';
import { NotesComponent } from './pages/notes/notes.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { NotesCardEditableComponent } from './components/notes-card-editable/notes-card-editable.component';
import { AuthModule } from '../auth/auth.module';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { FormsModule } from '@angular/forms';
import { SharedNotesComponent } from './pages/shared-notes/shared-notes.component';


@NgModule({
  declarations: [
    NotesCardComponent,
    HomeComponent,
    NotesComponent,
    SettingsComponent,
    CardContentComponent,
    AddNoteComponent,
    CardDialogComponent,
    NotesCardEditableComponent,
    CardContainerComponent,
    CardMenuComponent,
    SharedNotesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NotesRoutingModule,
    FlexLayoutModule,
    AuthModule,
    FormsModule
  ]
})
export class NotesModule { }
