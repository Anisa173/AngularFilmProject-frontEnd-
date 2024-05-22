import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EPayMethods } from 'src/app/Shared/models/e-pay-methods';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { PaymentMethodsService } from 'src/app/Shared/services/payment-methods.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pay-method-item',
  templateUrl: './pay-method-item.component.html',
  styleUrls: ['./pay-method-item.component.css'],
})
export class PayMethodItemComponent implements OnInit {
  @Output() itemClickAdmin = new EventEmitter<EPayMethods>();
  @Output() itemClickUser = new EventEmitter<EPayMethods>();
  @Output() deleted = new EventEmitter<EPayMethods>();
  @Input() pmId!: number;
  @Input() payMethod!: EPayMethods;
  payMethod$: Observable<EPayMethods> | undefined;

  constructor(
    private payMService: PaymentMethodsService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['pmId'];
    this.payMethod$ = this.payMService.getPaymentMethod(id);
  }
  onClickItem(pmId: number) {
    this.payMService.getPaymentMethod(pmId).subscribe((payMethod) => {
      this.itemClickAdmin.emit(payMethod);
    });
  }
  onDelete(pmId: number) {
    this.payMService.deleteApay(pmId).subscribe(() => {
      prompt('The payment method with id:' + pmId + 'is deleted');
      this.router.navigate(['paymentmethods/all'], { relativeTo: this.route });
      this.deleted.emit();
    });
  }
  onClickItemByUser(pmId: number) {
    this.payMService.getUserPaymentMethod(pmId).subscribe((payMethod) => {
      this.itemClickUser.emit(payMethod);
      this.router.navigate(['/stripe/card'], { relativeTo: this.route });
    });
  }
  goBack() {
    this.location.back();
  }
}
