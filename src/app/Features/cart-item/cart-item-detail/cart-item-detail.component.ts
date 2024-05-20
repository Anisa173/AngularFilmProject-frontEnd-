import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/Shared/models/cart-item';
import { CartItemService } from 'src/app/Shared/services/cart-item.service';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.css'],
})
export class CartItemDetailComponent implements OnInit, OnChanges {
  @Output() newItemInPay = new EventEmitter<CartItem>();
  @Input() newCartItem!: CartItem;
  @Input() cartItemId!: number;
  newCartItem$!: Observable<CartItem> | undefined;

  constructor(
    private cartItemServ: CartItemService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const ciId = this.route.snapshot.params['cartItemId'];
    this.newCartItem$ = this.cartItemServ.getCartItemById(ciId);
  }

  addNewItem(newCartItem: CartItem) {
    this.cartItemServ.createCartItem(newCartItem).subscribe((newCartItem) => {
      this.newItemInPay.emit(newCartItem);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method is implemented.');
  }
}
