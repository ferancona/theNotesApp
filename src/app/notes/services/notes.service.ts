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
    // const params = new HttpParams()
    //   .set('ownerId', userId);

    // return this.http.get<Note[]>(`${this.baseUrl}/notes?ownerId=${userId}`);
    return this.http.get<Note[]>(`${this.baseUrl}/notes`);
  }

}
