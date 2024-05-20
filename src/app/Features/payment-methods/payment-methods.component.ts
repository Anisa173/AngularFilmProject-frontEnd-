import { Component, OnInit } from '@angular/core';
import { EPayMethods } from 'src/app/Shared/models/e-pay-methods';
import { PaymentMethodsService } from 'src/app/Shared/services/payment-methods.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css'],
})
export class PaymentMethodsComponent implements OnInit {
  constructor(private pmService: PaymentMethodsService) {}

  payMethod!: EPayMethods;
  payMethods!: EPayMethods[];

  ngOnInit(): void {
    console.log('Method implemented.');
  }

  onAdded($event: EPayMethods) {
    this.payMethods.push($event);
  }
}
