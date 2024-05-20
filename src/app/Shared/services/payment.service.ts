import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { PaymentIntent } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpService: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/payment';

  addPayment(pay: Payment): Observable<Payment> {
    return this.httpService.post<Payment>(
      '${this.baseUrl}/{id}/paymentMethods/cart/cartitem',
      pay
    );
  }

  checkout(pay: Payment): Observable<Payment> {
    return this.httpService.post<Payment>('${this.baseUrl}/{cartId}', pay);
  }
}
