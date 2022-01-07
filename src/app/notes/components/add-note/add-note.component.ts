import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesCardComponent } from '../notes-card/notes-card.component';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { createEmptyNote, Note } from '../../interfaces/notes.interface';


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
    console.log('openDialog() called')
    this.dialog.open(CardDialogComponent, {
      data: this.emptyNote
    });
  }

}
