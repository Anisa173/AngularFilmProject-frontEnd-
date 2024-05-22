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
  updateDataFilm(film: Films): Observable<Films> {
    return this.httpCl.put<Films>(
      '${this.apiUrl}/update/{categoryId}/{idFilm}',
      film
    );
  }
  getFilmDetailsByCategory(
    _categoryId: number,
    _idFilm: number
  ): Observable<Films> {
    return this.httpCl.get<Films>('${this.apiUrl}/${categoryId}/{idFilm}');
  }
  getFilmCategoryById(_categoryId: number, _idFilm: number): Observable<Films> {
    return this.httpCl.get<Films>('${this.apiUrl}/read/{categoryId}/{idFilm}');
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

  deleteFilm(_idFilm: number, _categoryId: number): Observable<void> {
    return this.httpCl.delete<void>(
      '${this.apiUrl}/delete/{categoryId}/{filmId}'
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
  getAllFilms(): Observable<Films[]> {
    return this.httpCl.get<Films[]>('${this.apiUrl}/all');
  }
}
