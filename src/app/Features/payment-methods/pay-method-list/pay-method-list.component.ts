import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { EPayMethods } from 'src/app/Shared/models/e-pay-methods';
import { PaymentMethodsService } from 'src/app/Shared/services/payment-methods.service';

@Component({
  selector: 'app-pay-method-list',
  templateUrl: './pay-method-list.component.html',
  styleUrls: ['./pay-method-list.component.css'],
})
export class PayMethodListComponent implements OnInit, OnChanges {
  @Output() paymentList = new EventEmitter<EPayMethods>();
  @Input() pmList!: EPayMethods[];
  @Input() selectMethods!: EPayMethods;

  selectMethod!: EPayMethods | undefined;
  constructor(
    private pmService: PaymentMethodsService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method is implemented.');
  }

  ngOnInit(): void {
    console.log('Method is implemented.');
  }
  showPaymentMethods(_selectMethods: EPayMethods) {
    this.pmService.getAllPayMethods().subscribe((selectMethods) => {
      this.paymentList.emit(selectMethods);
    });
  }

  deleteItem(pmList: EPayMethods[]) {
    this.pmList = this.pmList.filter(($event) => $event !== this.selectMethod);
    this.selectMethod = undefined;
  }
}
