import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Films } from '../models/films';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://locahost:8080/api/Films';

  constructor(private httpCl: HttpClient) {}
  createFilms(film: Films): Observable<Films> {
    return this.httpCl.post<Films>('${this.apiUrl}/create/{categoryId}', film);
  }

  updateFilm(f: Films): Observable<Films> {
    return this.httpCl.put<Films>(
      '${this.apiUrl}/update/${categoryId}/films',
      f
    );
  }

  getFilmDetailsByCategory(
    _categoryId: number,
    _idFilm: number
  ): Observable<Films> {
    return this.httpCl.get<Films>('${this.apiUrl}/${categoryId}/films');
  }

  getFreeFilmDetailsById(
    _categoryId: number,
    _idFilm: number
  ): Observable<Films> {
    return this.httpCl.get<Films>('${this.apiUrl}/free/{categoryId}/{idFilm}');
  }

  getPaidFilmDetailsById(
    _categoryId: number,
    _idFilm: number
  ): Observable<Films> {
    return this.httpCl.get<Films>('${this.apiUrl}/paid/{categoryId}/{idFilm}');
  }

  updateDataFilm(film: Films): Observable<Films> {
    return this.httpCl.put<Films>(
      '${this.apiUrl}/update/${categoryId}/films',
      film
    );
  }

  deleteFilm(_idFilm: number, _categoryId: number): Observable<void> {
    return this.httpCl.delete<void>(
      '${this.apiUrl}/delete/${categoryId}/films'
    );
  }

  getFilmsByCategory(categoryId: number): Observable<Films[]> {
    return this.httpCl.get<Films[]>('${this.apiUrl}/${categoryId}');
  }

  getFreeFilmsBycategory(categoryId: number): Observable<Films[]> {
    return this.httpCl.get<Films[]>('${this.apiUrl}/free/${categoryId}');
  }

  getPaidFilmsByCategory(categoryId: number): Observable<Films[]> {
    return this.httpCl.get<Films[]>('${this.apiUrl}/paid/${categoryId}');
  }
}
