import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note, NoteContentType, createEmptyNote } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
      /* width: 200px; */
      max-width: 200px;
      min-width: 200px;
    }
  `
  ]
})
export class NotesCardComponent implements OnInit {

  @Output() onEditableClick: EventEmitter<void> = new EventEmitter();

  @Input() note: Note = createEmptyNote();
  @Input() showMenu: boolean = true;
  @Input() shared: boolean = false;

  constructor( private notesService: NotesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  duplicate() {
    this.authService.getLoggedUser()
      .subscribe( socialUser => {
        const newNote = {
          id: '',
          ownerId: socialUser.email,
          title: this.note.title,
          body: this.note.body,
          attachments: this.note.attachments,
          color: this.note.color,
          type: this.note.type
        }
        this.notesService.createNote(newNote);
      });
    // Need to refresh screen.
  }

  attachFile() {
    // TODO: need to get the file input!
    this.notesService.updateNote(this.note.id, this.note);
  }

  share() {
    // TODO.
    // Display a dialog to manage all the sharing!
    // this.notesService.shareNote(this.note.id)
  }

  delete() {
    this.notesService.deleteNote(this.note.id);
    // Need to refresh screen.
  }

  editableClicked(){
    this.onEditableClick.emit();
  }

}
