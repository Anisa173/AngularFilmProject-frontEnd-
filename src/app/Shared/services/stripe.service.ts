import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, PaymentIntent, CustomerOptions } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private apiUrl = 'http://localhost:8080/api/stripe';

  constructor(private httpCl: HttpClient) {}

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.httpCl.post<PaymentIntent>(
      `${this.apiUrl}/create-payment-intent`,
      { amount }
    );
  }
  addCardTopay(_card: Card, email: string): Observable<Card> {
    return this.httpCl.post<Card>('{this.apiUrl}/card', email);
  }
  makePaymentUsingCard(): Observable<PaymentIntent> {
    return this.httpCl.get<PaymentIntent>('{this.apiUrl}/${customerId}');
  }
  createCustomer(_customer: CustomerOptions): Observable<CustomerOptions> {
    return this.httpCl.post<CustomerOptions>(
      '{this.apiUrl}/{token}',
      _customer
    );
  }
}
