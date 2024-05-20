import { Component } from '@angular/core';
import { Payment } from 'src/app/Shared/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  pay!: Payment;
  pays!: Payment[];

  onAdded($event: Payment) {
    this.pays.push($event);
  }

  onCheckout($event: Payment) {
    this.pays.push($event);
  }
}
