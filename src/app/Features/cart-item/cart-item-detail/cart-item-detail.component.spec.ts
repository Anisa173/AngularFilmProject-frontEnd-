import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemDetailComponent } from './cart-item-detail.component';

describe('CartItemDetailComponent', () => {
  let component: CartItemDetailComponent;
  let fixture: ComponentFixture<CartItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemDetailComponent]
    });
    fixture = TestBed.createComponent(CartItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
