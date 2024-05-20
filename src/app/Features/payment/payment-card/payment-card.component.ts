import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ɵConsole,
} from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { Payment } from 'src/app/Shared/models/payment';
import { PaymentService } from 'src/app/Shared/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent implements OnInit {
  @Input() paymentIntent!: Payment;
  @Output() payment = new EventEmitter<Payment>();
  @Output() fillForm = new EventEmitter<Payment>();
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  paymentForm!: FormGroup;

  constructor(
    private payService: PaymentService,
    private formBuilder: FormBuilder,
    private stripeService: StripeService,
    private router: Router,
    private route: ActivatedRoute,
    protected authService: AuthService
  ) {}
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: [' ', [Validators.required, Validators.email]],
      amount: [100, [Validators.required, Validators.pattern(/d+/)]],
    });
  }

  addCartToPayment(paymentIntent: Payment) {
    this.payService.addPayment(paymentIntent).subscribe((paymentIntent) => {
      this.payment.emit(paymentIntent);
    });
  }

  pay() {
    if (this.paymentForm.valid) {
      this.stripeService
        .retrievePaymentIntent(this.paymentForm.value)
        .pipe(
          switchMap((pi: any) =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.paymentForm.value,
                },
              },
            })
          )
        )
        .subscribe((result) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        });
    } else {
      console.log(this.paymentForm);
    }
  }
  checkOut(paymentIntent: Payment) {
    this.payService.checkout(paymentIntent).subscribe(() => {
      alert('Payment is done!');
      this.fillForm.emit();
      this.router.navigate(['/api/Films/paid/{categoryId}'], {
        relativeTo: this.route,
      });
    });
  }
}
