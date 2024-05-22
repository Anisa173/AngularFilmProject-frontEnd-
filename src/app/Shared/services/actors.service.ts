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

  updateActor() {}
}
