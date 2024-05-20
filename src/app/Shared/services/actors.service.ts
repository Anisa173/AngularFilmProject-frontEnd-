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
  private convertToEntity(actor: Actors): Actors {
    return {
      idAct: actor.idAct,
      fullName: actor.fullName,
      biography: actor.biography,
      imageUrl: actor.imageUrl,
      grades: actor.grades,
      filmsId: actor.filmsId,
      filmTitle: actor.filmTitle,
    };
  }
  updateActor() {}
}
