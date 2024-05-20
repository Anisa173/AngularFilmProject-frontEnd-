import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Shared/models/cart';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  @Output() cartPayment = new EventEmitter<Cart>();
  @Input() cartP!: Cart;
  @Input() cartId!: number;
  cartP$: Observable<Cart> | undefined;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  addToCart(cartP: Cart) {
    this.cartService.preparePayment(cartP).subscribe((cartP) => {
      this.cartPayment.emit(cartP);
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['cartId'];
    this.cartP$ = this.cartService.getCartByUserId(id);
  }
}
