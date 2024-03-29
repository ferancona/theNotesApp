import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../../services/notes.service';
import { AttachmentDialogData } from '../../interfaces/notes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attachment-dialog',
  templateUrl: './attachment-dialog.component.html',
  styles: [
  ]
})
export class AttachmentDialogComponent implements OnInit {

  file: File | null = null;
  rawContent: string = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data: AttachmentDialogData,
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
  }

  async loadFile(fileReader: FileReader) {
    this.rawContent = btoa(fileReader.result!.toString());
  }

  async updateNoteAttachment() {
    const encoded = btoa(this.rawContent)
    // console.log('Encoded!', encoded)
    this.data.note.attachment = encoded;
    this.data.note.attachmentName = this.file?.name || 'Name Unknown';
    this.data.note.attachmentType = this.file?.type || 'Type Unknown';
    // return new Observable( observer => {
    //     const encoded = btoa(this.rawContent)
    //     console.log(encoded)
    //     this.data.note.attachment = encoded;
    //     this.data.note.attachmentName = this.file?.name || 'Name Unknown';
    //     this.data.note.attachmentType = this.file?.type || 'Type Unknown';
    //   observer.complete();
    // });
  }

  onChange(event: any) {
    console.log(event)
    this.file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.onload = async (e) => {
      if (fileReader.result instanceof String){
        console.log(typeof fileReader.result)
      }
      if (fileReader.result !instanceof ArrayBuffer){
        console.log(typeof fileReader.result?.toString());
        this.rawContent = fileReader.result.toString();
      }

      await this.loadFile(fileReader);
      this.data.note.attachment = this.rawContent;
      await this.updateNoteAttachment();
      this.notesService.updateNote(this.data.note, true)
          .subscribe( res => console.log(res) );
    }
    fileReader.readAsText(this.file!)
  }

  async deleteNoteAttachment() {
    this.data.note.attachment = '';
    this.data.note.attachmentName = '';
    this.data.note.attachmentType = '';
  }

  async deleteAttachment() {
    await this.deleteNoteAttachment();
    this.notesService.updateNote(this.data.note, true);
  }

  downloadFile() {

  }

}
