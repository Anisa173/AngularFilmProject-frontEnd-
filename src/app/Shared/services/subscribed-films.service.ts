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
    _id: number,
    _idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/{id}/{idFilm}'
    );
  }

  getAllFreeSubscribedFilmById(_id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>(
      '${this.baseUrl}/read/free/${id}'
    );
  }
  getAllPaidSubscribedFilmsById(_id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>(
      '${this.baseUrl}/read/paid/${id}'
    );
  }

  getSubscribedFreeFilmByUserId(
    _id: number,
    _idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/free/${id}/${idFilm}'
    );
  }

  getSubscribedPaidFilmByUserId(
    _id: number,
    _idFilm: number
  ): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.baseUrl}/read/paid/${id}/${idFilm}'
    );
  }

  getAllReviewsByFilmId(_idFilm: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>(
      '${this.baseUrl}/reviews/${idFilm}'
    );
  }
  getAllReviewsByUserId(_id: number): Observable<SubscribedFilms[]> {
    return this.httpCl.get<SubscribedFilms[]>('${this.baseUrl}/reviews/${id}');
  }

  getPaidFilmUrl(_id: number, _idFilm: number): Observable<SubscribedFilms> {
    return this.httpCl.get<SubscribedFilms>(
      '${this.basrUrl}/live/${id}/${idFilm}'
    );
  }
}
