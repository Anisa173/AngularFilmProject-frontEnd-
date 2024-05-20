import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodListComponent } from './pay-method-list.component';

describe('PayMethodListComponent', () => {
  let component: PayMethodListComponent;
  let fixture: ComponentFixture<PayMethodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayMethodListComponent]
    });
    fixture = TestBed.createComponent(PayMethodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
