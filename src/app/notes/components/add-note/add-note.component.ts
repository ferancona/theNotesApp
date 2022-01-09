import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesCardComponent } from '../notes-card/notes-card.component';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { createEmptyNote, Note, CardDialogData, NotesVO, createEmptyNotesVO } from '../../interfaces/notes.interface';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styles: [
  ]
})
export class AddNoteComponent implements OnInit {

  @Output() onRefreshNeeded: EventEmitter<any> = new EventEmitter();

  emptyNote: NotesVO = createEmptyNotesVO();

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(CardDialogComponent, {
      data: {
        note: this.emptyNote,
        newNote: true,
        shared: false
      }
    });
    const sub = dialogRef.componentInstance.onRefreshNeeded
      .subscribe(() => {
        this.onRefreshNeeded.emit();
    });
  }

}
