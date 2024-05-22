import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmCategory } from '../models/film-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmCategoryService {
  private apiUrl = 'http://localhost:8080/api/FilmCategory';
  constructor(private httpClient: HttpClient) {}

  addFilmCategory(filmCateg: FilmCategory): Observable<FilmCategory> {
    return this.httpClient.post<FilmCategory>(
      '${this.apiUrl}/create',
      filmCateg
    );
  }

  getFilmCategById(_idCtg: number): Observable<FilmCategory> {
    return this.httpClient.get<FilmCategory>('${this.apiUrl}/read/${id}');
  }

  delete(_idCtg: number): Observable<void> {
    return this.httpClient.delete<void>('${this.apiUrl}/delete/${id}');
  }

  getAllCategories(): Observable<FilmCategory[]> {
    return this.httpClient.get<FilmCategory[]>('${this.apiUrl}/all');
  }
}
