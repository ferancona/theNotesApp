import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Note, createEmptyNote } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-card-editable',
  templateUrl: './notes-card-editable.component.html',
  styleUrls: ['./notes-card-editable.component.css']
})
export class NotesCardEditableComponent implements OnInit {

  @Input() note: Note = createEmptyNote();

  // @ViewChild('txtBody') txtBody!: ElementRef<HTMLInputElement>;
  // @ViewChild('txtBody') set txtBodyRef(ref: ElementRef) {
  //   if (!!ref){
  //     ref.nativeElement.focus();
  //   }
  // }

  debouncer: Subject<void> = new Subject();

  constructor( private notesService: NotesService ) { }

  ngOnInit(): void {
    // this.txtBodyRef.nativeElement.focus();
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe( () => {
        this.update();
      });
  }

  update() {
    this.notesService.updateNote(this.note.id, this.note);
  }

  keyPressed() {
    this.debouncer.next();
  }

}
