import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EPayMethods } from 'src/app/Shared/models/e-pay-methods';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { PaymentMethodsService } from 'src/app/Shared/services/payment-methods.service';

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
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['pmId'];
    this.payMethod$ = this.payMService.getPayMethodById(id);
  }
  onClickItem(pmId: number) {
    this.payMService.getPayMethodById(pmId).subscribe(() => {
      this.itemClickAdmin.emit();
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
    this.payMService.getUserPaymentMethod(pmId).subscribe(() => {
      this.itemClickUser.emit();
      this.router.navigate(['/stripe/card'], { relativeTo: this.route });
    });
  }
}
