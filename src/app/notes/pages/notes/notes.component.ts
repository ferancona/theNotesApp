import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../../components/card-dialog/card-dialog.component';
import { Note, NotesVO, GetNotesResponse } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';

import { AuthService } from '../../../auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: NotesVO[] = [];

  constructor( private notesService: NotesService,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.authService.getLoggedUser()
      .subscribe( (socialUser: SocialUser) => {
        console.log(socialUser)
        this.notesService.getNotes(socialUser.email)
          .subscribe( res => this.notes = res.dataList );
      });
  }

  openDialog(note: NotesVO) {
    this.dialog.open(CardDialogComponent, {
      data: {
        note: note,
        newNote: false,
        shared: false
      }
    });
  }

}


