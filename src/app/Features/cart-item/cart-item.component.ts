import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/Shared/models/cart-item';
import { CartItemService } from 'src/app/Shared/services/cart-item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit, OnChanges {
  constructor(private cartItemServ: CartItemService) {}

  cartI!: CartItem;
  cartIs!: CartItem[];

  onAdded($event: CartItem) {
    this.cartIs.push($event);
  }

  ngOnInit(): void {
    console.log('Method initialized!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method  implemented successfully!');
  }
}
