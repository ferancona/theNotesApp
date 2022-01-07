import { Component, Input, OnInit } from '@angular/core';
import { Note, createEmptyNote } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styles: [
  ]
})
export class CardContainerComponent implements OnInit {

  @Input() note: Note = createEmptyNote();

  constructor() { }

  ngOnInit(): void {
  }

}
