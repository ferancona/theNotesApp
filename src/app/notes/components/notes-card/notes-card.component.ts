import { Component, Input, OnInit } from '@angular/core';
import { Note, NoteContentType } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
      /* width: 200px; */
    }
  `
  ]
})
export class NotesCardComponent implements OnInit {

  @Input() note: Note = {
    id: '',
    ownerId: '',
    title: "My first note!",
    body: "I remember when I saw this dog... best day ever!",
    attachments: [],
    color: "",
    type: NoteContentType.PlainText
  };

  constructor() { }

  ngOnInit(): void {
  }

}
