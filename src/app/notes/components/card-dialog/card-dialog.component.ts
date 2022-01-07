import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styles: [`
    app-notes-card {
      margin: 1px;
    }
  `
  ]
})
export class CardDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: Note) { }

  ngOnInit(): void {
  }

}
