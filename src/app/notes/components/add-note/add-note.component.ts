import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesCardComponent } from '../notes-card/notes-card.component';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { createEmptyNote, Note, CardDialogData } from '../../interfaces/notes.interface';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styles: [
  ]
})
export class AddNoteComponent implements OnInit {

  emptyNote: Note = createEmptyNote();

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CardDialogComponent, {
      data: {
        note: this.emptyNote,
        newNote: true,
        shared: false
      }
    });
  }

}
