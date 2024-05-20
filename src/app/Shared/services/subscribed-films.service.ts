import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscribedFilms } from '../models/subscribed-films';

@Injectable({
  providedIn: 'root',
})
export class SubscribedFilmsService {
  private baseUrl = 'http://localhost:8080/subscribedFilm';
  constructor(private httpCl: HttpClient) {}

  createFilmFreeReview(
    reviewsFilm: SubscribedFilms
  ): Observable<SubscribedFilms> {
    return this.httpCl.post<SubscribedFilms>(
      '${this.baseUrl}/add/free/${userId}/films',
      reviewsFilm
    );
  }
  createFilmPaidReview(
    reviewsFilm: SubscribedFilms
  ): Observable<SubscribedFilms> {
    return this.httpCl.post<SubscribedFilms>(
      '${this.baseUrl}/add/paid/${userId}/films',
      reviewsFilm
    );
  }

  getAllSubscribedFilmById(): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>('${this.baseUrl}/read/all');
  }
  getFilmReviewsByUserId(
    id: number,
    idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/{id}/{idFilm}'
    );
  }

  getAllFreeSubscribedFilmById(id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>(
      '${this.baseUrl}/read/free/${id}'
    );
  }
  getAllPaidSubscribedFilmsById(id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>('${this.baseUrl}/read/paid/{id}');
  }

  getSubscribedFreeFilmByUserId(
    id: number,
    idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/free/${id}/${idFilm}'
    );
  }
  getSubscribedPaidFilmByUserId(
    id: number,
    idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/paid/${id}/${idFilm}'
    );
  }
  getAllReviewsByFilmId(idFilm: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>(
      '${this.baseUrl}/reviews/${idFilm}'
    );
  }
  getAllReviewsByUserId(id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>('${this.baseUrl}/reviews/${id}');
  }
}
