import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Actors } from '../models/actors';
@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  private apiUrl = 'http://locahost:8080/api/actors';
  constructor(private httpC: HttpClient) {}

  createActor(actor: Actors): Observable<Actors> {
    return this.httpC.post<Actors>(
      '${this.apiUrl}/create/${categoryId}/${idFilm}',
      {
        actor,
      }
    );
  }

  updateActor(actor: Actors): Observable<Actors> {
    return this.httpC.patch<Actors>(
      '${this.apiUrl}/update/{idFilm}/{actorId}',
      actor
    );
  }

  deleteFilmActor(_idFilm: number, _actorId: number): Observable<void> {
    return this.httpC.delete<void>('${this.apiUrl}/delete/${idFilm}/actors');
  }
  getAllActorsByFilmId(_idFilm: number): Observable<Actors[]> {
    return this.httpC.get<Actors[]>('${this.apiUrl}/all/${idFilm}');
  }

  getActorFilmById(_actorId: number, _idFilm: number): Observable<Actors> {
    return this.httpC.get<Actors>('${this.apiUrl}/${idFilm}/${actorId}');
  }
  getActorByFilmId(_actorId: number, _idFilm: number): Observable<Actors> {
    return this.httpC.get<Actors>('${this.apiUrl}/retrieve/${idFilm}/actors');
  }
}
