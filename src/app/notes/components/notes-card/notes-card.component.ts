import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesVO, createEmptyNotesVO } from '../../interfaces/notes.interface';
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
  @Output() onRefreshNeeded: EventEmitter<any> = new EventEmitter();

  @Input() note: NotesVO = createEmptyNotesVO();
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
          notesId: '',
          authorName: socialUser.email,
          title: this.note.title,
          body: this.note.body,
          attachment: this.note.attachment,
          attachmentName: this.note.attachmentName,
          attachmentType: this.note.attachmentType,
          createdDate: this.note.createdDate,
          modifiedDate: this.note.modifiedDate
        }
        this.notesService.createNote(newNote)
          .subscribe( res => {
            console.log(res);
            this.onRefreshNeeded.emit();
          });
      });
    // Need to refresh screen.
  }
  duplicateCopy() {
    this.duplicate();
  }

  attachFile() {
    // TODO: need to get the file input!
    // 1. Extract byteArray of content
    // 2. Convert to string using btoa("abc") and atob("YWJj")
    this.notesService.updateNote(this.note, true);
  }

  share() {
    // TODO.
    // Display a dialog to manage all the sharing!
    // this.notesService.shareNote(this.note.id)
  }

  delete() {
    console.log(this.note)
    this.notesService.deleteNote(this.note.notesId)
      .subscribe( res => {
        console.log(res);
        this.onRefreshNeeded.emit();
      });
    // Need to refresh screen.
  }

  editableClicked(){
    this.onEditableClick.emit();
  }

}
