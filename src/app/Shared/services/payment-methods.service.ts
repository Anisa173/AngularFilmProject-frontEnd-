import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EPayMethods } from '../models/e-pay-methods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodsService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080//api/paymentmethods';

  savePaymentMethods(paymentmethods: EPayMethods): Observable<EPayMethods> {
    return this.httpClient.post<EPayMethods>(
      '${this.baseUrl}/create',
      paymentmethods
    );
  }
  update(pm: EPayMethods): Observable<EPayMethods> {
    return this.httpClient.put<EPayMethods>(
      '${this.baseUrl}/update/{pmId}',
      pm
    );
  }

  getAllPayMethods(): Observable<EPayMethods> {
    return this.httpClient.get<EPayMethods>('${this.baseUrl}/all');
  }
  getPayMethodById(_pmId: number): Observable<EPayMethods> {
    return this.httpClient.get<EPayMethods>('${this.baseUrl}/{id}');
  }
  getCartPaymentMethod(_pmId: number): Observable<EPayMethods> {
    return this.httpClient.get<EPayMethods>('${this.baseUrl}/fetch/${pmId}');
  }
  deleteApay(_pmId: number): Observable<void> {
    return this.httpClient.delete<void>('${this.baseUrl}/delete/${pmId}');
  }
  getUserPaymentMethod(_pmId: number): Observable<EPayMethods> {
    return this.httpClient.get<EPayMethods>(
      '${this.baseUrl}/read/${id}/paymentMethod'
    );
  }
}
