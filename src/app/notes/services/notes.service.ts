import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note, NotesVO, GetNotesResponse, UpdateNotesResponse, CreateNotesResponse, DeleteNotesResponse } from '../interfaces/notes.interface';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl: string = environment.baseUrl;
  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': ''
  }
  private requestOptions = {
    headers: new HttpHeaders(this.headers)
  }

  constructor( private http: HttpClient,
    private authService: AuthService
    ) { }

  createNote(note: NotesVO): Observable<CreateNotesResponse> {
    console.log('creating note...');
    return this.http.post<CreateNotesResponse>(`${this.baseUrl}/notes/create`,
      {
        'title': note.title,
        'authorName': note.authorName,
        'body': note.body
      },
      this.requestOptions
    );
  }

  getNotes(userId: string): Observable<GetNotesResponse> {
    console.log('getting notes...');
    // const params = new HttpParams()
    //   .set('ownerId', userId);

    return this.http.post<GetNotesResponse>(`${this.baseUrl}/notes/fetch`,
    {
      'authorName': userId
    },
    this.requestOptions
    );
    // return this.http.get<Note[]>(`${this.baseUrl}/notes?ownerId=${userId}`);
    // return this.http.get<Note[]>(`${this.baseUrl}/notes`);
  }

  getSharedNotes(userId: string): Observable<GetNotesResponse> {
    console.log('getting shared notes...');
    return this.http.post<GetNotesResponse>(`${this.baseUrl}/notes/fetch`,
      {},
      this.requestOptions
    );
    // return this.http.get<NotesVO[]>(`${this.baseUrl}/notes?ownerId=2`);
  }

  fetchNotes(userId: string) {
    // Need to get notes by user.
    //
  }

  updateNote(note: NotesVO, hasAttachment: boolean): Observable<UpdateNotesResponse> {
    // console.log(`updating note (ID: ${note.notesId})`);
    console.log(`updating note: ${JSON.stringify(note)}`);

    const request = (hasAttachment) ? {
        'notesId': note.notesId,
        'title': note.title,
        'authorName': note.authorName,
        'body': note.body,
        'attachment': note.attachment,
        'attachmentName': note.attachmentName,
        'attachmentType': note.attachmentType
      } : {
        'notesId': note.notesId,
        'title': note.title,
        'authorName': note.authorName,
        'body': note.body
      }

    return this.http.post<UpdateNotesResponse>(`${this.baseUrl}/notes/update`,
      request,
      this.requestOptions
    );
  }

  deleteNote(noteId: string): Observable<DeleteNotesResponse> {
    console.log(`deleting note (ID: ${noteId})...`);
    return this.http.post<DeleteNotesResponse>(`${this.baseUrl}/notes/delete`,
      {
        'notesId': noteId
      },
      this.requestOptions
    );
  }


  shareNote(noteId: string, userId: string) {
    console.log('sharing note...')
  }


}
