import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../interfaces/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl: string = environment.baseUrl;


  constructor( private http: HttpClient ) { }

  getNotes(userId: string): Observable<Note[]> {
    console.log('getting notes...');
    // const params = new HttpParams()
    //   .set('ownerId', userId);

    // return this.http.get<Note[]>(`${this.baseUrl}/notes?ownerId=${userId}`);
    return this.http.get<Note[]>(`${this.baseUrl}/notes`);
  }

  getSharedNotes(userId: string): Observable<Note[]> {
    console.log('getting shared notes...');
    return this.http.get<Note[]>(`${this.baseUrl}/notes?ownerId=2`);
  }

  fetchNotes(userId: string) {
    // Need to get notes by user.
    //
  }

  updateNote(noteId: string, note: Note) {
    console.log(`updating note (ID: ${noteId})`);
  }

  deleteNote(noteId: string) {
    console.log(`deleting note (ID: ${noteId})...`);
  }

  createNote(note: Note) {
    console.log('creating note...');
  }

  shareNote(noteId: string, userId: string) {
    console.log('sharing note...')
  }


}
