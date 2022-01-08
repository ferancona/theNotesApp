import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardDialogData } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';


@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styles: [`
    app-notes-card {
      margin: 1px;
      margin-bottom: 0;
    }
  `
  ]
})
export class CardDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: CardDialogData,
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
  }

  create() {
    // TODO: Need to create note object and call the API.
    this.notesService.createNote(this.data.note);
  }

}
