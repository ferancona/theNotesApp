import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Note, createEmptyNote, NotesVO, createEmptyNotesVO } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-card-editable',
  templateUrl: './notes-card-editable.component.html',
  styleUrls: ['./notes-card-editable.component.css']
})
export class NotesCardEditableComponent implements OnInit {

  @Input() note: NotesVO = createEmptyNotesVO();

  debouncer: Subject<void> = new Subject();

  constructor( private notesService: NotesService ) { }

  ngOnInit(): void {
    // this.txtBodyRef.nativeElement.focus();
    this.debouncer
      .pipe(debounceTime(1000))
      .subscribe( () => {
        this.update();
      });
  }

  update() {
    console.log('Before notesService.updateNote( -->', this.note)
    this.notesService.updateNote(this.note, false)
    .subscribe(res => {
      console.log(res)
      console.log('After notesService.updateNote( -->', this.note)
      } );
  }

  keyPressed() {
    this.debouncer.next();
  }

}

"Either fill all the attachment related fields or don't fill any of them.."
