import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesVO, createEmptyNotesVO } from '../../interfaces/notes.interface';
import { AttachmentDialogComponent } from '../attachment-dialog/attachment-dialog.component';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styles: [
  ]
})
export class CardMenuComponent implements OnInit {

  @Output() onDelete: EventEmitter<void> = new EventEmitter();
  @Output() onDuplicate: EventEmitter<void> = new EventEmitter();
  @Output() onAttach: EventEmitter<void> = new EventEmitter();
  @Output() onShare: EventEmitter<void> = new EventEmitter();
  @Output() onDuplicateCopy: EventEmitter<void> = new EventEmitter();

  @Input() note: NotesVO = createEmptyNotesVO();
  @Input() shared: boolean = false;

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  duplicateTrigger() {
    if (this.shared) {
      this.onDuplicateCopy.emit();
    }
    else {
      this.onDuplicate.emit();
    }
  }

  openAttachDialog(note: NotesVO) {
    this.dialog.open(AttachmentDialogComponent, {
      data: {
        note: note
      }
    })
  }

  // attachFileTrigger() {
  //   this.onAttach.emit();
  // }

  shareTrigger() {
    this.onShare.emit();
  }

  deleteTrigger() {
    this.onDelete.emit();
  }

}
