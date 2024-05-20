import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'http://localhost:8080//api/cart';

  preparePayment(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(
      '${this.apiUrl}/${id}/cartItem/paymentMethods',
      cart
    );
  }
  getCartByUserId(_cId: number): Observable<Cart> {
    return this.httpClient.get<Cart>(
      '${this.apiUrl}/${cartId}/user/cartitem/paymentMethods'
    );
  }
  getAllUserCart(): Observable<Cart> {
    return this.httpClient.get<Cart>('${this.apiUrl}/all');
  }
}
