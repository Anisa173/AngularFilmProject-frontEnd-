import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodDetailsComponent } from './pay-method-details.component';

describe('PayMethodDetailsComponent', () => {
  let component: PayMethodDetailsComponent;
  let fixture: ComponentFixture<PayMethodDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayMethodDetailsComponent]
    });
    fixture = TestBed.createComponent(PayMethodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
