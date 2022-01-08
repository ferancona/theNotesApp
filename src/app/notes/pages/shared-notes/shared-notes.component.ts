import { Component, OnInit } from '@angular/core';
import { Note } from '../../interfaces/notes.interface';
import { AuthService } from '../../../auth/auth.service';
import { SocialUser } from 'angularx-social-login';
import { NotesService } from '../../services/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../../components/card-dialog/card-dialog.component';

@Component({
  selector: 'app-shared-notes',
  templateUrl: './shared-notes.component.html',
  styles: [`
    app-notes-card {
      cursor: pointer;
    }
  `
  ]
})
export class SharedNotesComponent implements OnInit {

  notes: Note[] = [];

  constructor( private authService: AuthService,
    private notesService: NotesService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.authService.getLoggedUser()
      .subscribe( socialUser => {
        this.notesService.getSharedNotes(socialUser.email)
          .subscribe( notes => this.notes = notes );
      });
  }

  openDialog(note: Note) {
    this.dialog.open(CardDialogComponent, {
      data: {
        note: note,
        newNote: false,
        shared: true
      }
    })
  }

}
