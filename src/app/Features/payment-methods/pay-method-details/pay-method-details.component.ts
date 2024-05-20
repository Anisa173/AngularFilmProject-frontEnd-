import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EPayMethods } from 'src/app/Shared/models/e-pay-methods';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { PaymentMethodsService } from 'src/app/Shared/services/payment-methods.service';

@Component({
  selector: 'app-pay-method-details',
  templateUrl: './pay-method-details.component.html',
  styleUrls: ['./pay-method-details.component.css'],
})
export class PayMethodDetailsComponent implements OnInit, OnChanges {
  constructor(
    private payMethodService: PaymentMethodsService,
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    protected authSer: AuthService
  ) {}

  paymentForm!: FormGroup;

  @Output() contractedEpayMethods = new EventEmitter<EPayMethods>();
  @Input() payMentId!: number;
  @Input() payMethod!: EPayMethods;

  payMethod$: Observable<EPayMethods> | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.params['payMentId'];
    this.payMethodService
      .getPayMethodById(id)
      .subscribe((value: EPayMethods) => {
        console.log(value);
        this.payMethod = value;
        this.paymentForm = this.builder.nonNullable.group({
          methodAppName: this.builder.nonNullable.control('', {
            validators: [Validators.required, Validators.maxLength(25)],
          }),
          urlApp: this.builder.nonNullable.control('', {
            validators: Validators.required,
          }),
          logoAppUrl: this.builder.nonNullable.control('', {
            validators: Validators.required,
          }),
          pmfeeCharged: this.builder.nonNullable.control<number | undefined>(
            undefined,
            { validators: [Validators.required, Validators.max(20)] }
          ),
          currency: this.builder.nonNullable.control('', {
            validators: Validators.required,
          }),
        });
      });
  }
  get methodAppName() {
    return this.paymentForm.controls['methodAppName'];
  }
  get urlApp() {
    return this.paymentForm.controls['urlApp'];
  }
  get logoAppUrl() {
    return this.paymentForm.controls['logoAppUrl'];
  }

  get filmTitle() {
    return this.paymentForm.controls['filmTitle'];
  }
  get pmfeeCharged() {
    return this.paymentForm.controls['pmfeeCharged'];
  }
  get currency() {
    return this.paymentForm.controls['currency'];
  }

  onSubmit() {
    console.warn(this.paymentForm.value);
  }
  createPaymentMethod(payMethod: EPayMethods) {
    this.payMethodService
      .savePaymentMethods(payMethod)
      .subscribe((payMethod) => {
        alert('PaymentMethod is added successfully!');
        this.contractedEpayMethods.emit(payMethod);
        //  this.paymentForm.reset();
        this.router.navigate(['paymentmethods/all'], {
          relativeTo: this.route,
        });
      });
  }
  updatePaymentMethodds(payMethod: EPayMethods) {
    this.payMethodService.update(payMethod).subscribe((payMethod) => {
      alert('This record is updated correctly!');
      this.router.navigate(['paymentmethods/read/{pmId}'], {
        relativeTo: this.route,
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
}
