import { Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardDialogData } from '../../interfaces/notes.interface';
import { NotesService } from '../../services/notes.service';
import { AuthService } from '../../../auth/auth.service';
import { EventEmitter } from '@angular/core';


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

  @Output() onRefreshNeeded: EventEmitter<any> = new EventEmitter();

  constructor( @Inject(MAT_DIALOG_DATA) public data: CardDialogData,
    private notesService: NotesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  create() {
    // TODO: Need to update list.
    this.authService.getLoggedUser()
      .subscribe( socialUser => {
        this.data.note.authorName = socialUser.email
        if (this.data.note.title.length === 0){
          this.data.note.title = 'Title';
        }
        if (this.data.note.body.length === 0){
          this.data.note.body = 'Take a note...';
        }
        this.notesService.createNote(this.data.note)
          .subscribe(res => {
            console.log(res);
            this.onRefreshNeeded.emit();
          });
      });
  }

}
