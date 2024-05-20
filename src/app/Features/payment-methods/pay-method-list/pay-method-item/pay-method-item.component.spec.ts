import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodItemComponent } from './pay-method-item.component';

describe('PayMethodItemComponent', () => {
  let component: PayMethodItemComponent;
  let fixture: ComponentFixture<PayMethodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayMethodItemComponent]
    });
    fixture = TestBed.createComponent(PayMethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
