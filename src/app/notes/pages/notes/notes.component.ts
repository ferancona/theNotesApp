import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../../components/card-dialog/card-dialog.component';
import { Note, User } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';

import { SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styles: [`
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .example-full-width {
      width: 100%;
    }
    app-notes-card {
        cursor: pointer;
    }
  `
  ]
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  user!: SocialUser;

  constructor(
    private notesService: NotesService,
    public dialog: MatDialog,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.socialAuthService.authState
      .subscribe( something => {

        console.log('ngOnInit - notes')
        console.log(something)
        this.user = something;

        this.notesService.getNotes('1')
          .subscribe( notes => {
            this.notes = notes
            console.log(this.notes)
          } );
      });

    // this.notesService.getNotes(this.user.id)
    //   .subscribe( notes => this.notes = notes )
  }

  openDialog(note: Note) {
    console.log('openDialog() called')
    this.dialog.open(CardDialogComponent, {
      data: note
    })
  }

}
