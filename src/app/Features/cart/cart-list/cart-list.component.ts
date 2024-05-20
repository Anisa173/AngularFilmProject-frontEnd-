import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Cart } from 'src/app/Shared/models/cart';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit, OnChanges {
  @Output() cartList = new EventEmitter<Cart[]>();
  @Input() cart!: Cart;
  @Input() carts!: Cart[];
  constructor(private cartService: CartService) {}

  getAllCarts() {
    this.cartService.getAllUserCart().subscribe(() => {
      this.cartList.emit();
    });
  }

  ngOnInit(): void {
    console.log('Method is implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method is implemented.');
  }
}
