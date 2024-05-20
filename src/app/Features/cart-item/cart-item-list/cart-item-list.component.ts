import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItem } from 'src/app/Shared/models/cart-item';
import { CartItemService } from 'src/app/Shared/services/cart-item.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
})
export class CartItemListComponent implements OnInit, OnChanges {
  @Output() cartItemList = new EventEmitter<CartItem[]>();
  @Input() cItemList!: CartItem[];
  //@Input() cartItem!: CartItem;
  constructor(private cartItemServ: CartItemService) {}

  generateAllCartItemNow(_cItemList: CartItem[]) {
    this.cartItemServ.getAllCartItems().subscribe((cItemList) => {
      this.cartItemList.emit(cItemList);
    });
  }

  ngOnInit(): void {
    console.log('Method is implementing.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method is implemented successfully.');
  }
}
