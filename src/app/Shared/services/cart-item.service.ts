import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private baseUrl = 'http://localhost:8080//api/CartItem';
  constructor(private httpClient: HttpClient) {}

  createCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.httpClient.post<CartItem>('${this.baseUrl}/add', cartItem);
  }

  getAllCartItems(): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>('${this.baseUrl}/all');
  }
  getCartItemById(_ciId: number): Observable<CartItem> {
    return this.httpClient.get<CartItem>('${this.baseUrl}/{ciId}');
  }
}
