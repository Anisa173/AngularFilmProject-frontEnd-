import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/Shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  cart!: Cart;
  carts!: Cart[];

  ngOnInit(): void {
    console.log('Method is implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method is implemented.');
  }

  onAdded($event: Cart) {
    this.carts.push($event);
  }
}
