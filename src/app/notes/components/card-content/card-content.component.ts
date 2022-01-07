import { Component, Input, OnInit } from '@angular/core';
import { NoteContentType } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styles: [
  ]
})
export class CardContentComponent implements OnInit {

  @Input() body: string = '';

  type: NoteContentType = NoteContentType.PlainText;

  constructor() { }

  ngOnInit(): void {
  }

}
