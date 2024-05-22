import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';
  user!: User;
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>('${this.apiUrl}/register', user);
  }

  updateAccount(user: User): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({ Authorization: 'Bearer ${token}' });
    const options = { headers };
    const url = '${this.apiUrl}/update/{id}';
    return this.http.put<User>(url, user, options);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('${this.apiUrl}/all');
  }

  getUserDetails(id: number): Observable<User> {
    return this.http.get<User>('${this.apiUrl}/location/{id}');
  }
  getUserItem(id: number): Observable<User> {
    return this.http.get<User>('${this.apiUrl}/${id}');
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>('$(this.apiUrl)/delete/{id}');
  }
}
