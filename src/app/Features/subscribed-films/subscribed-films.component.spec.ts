import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedFilmsComponent } from './subscribed-films.component';

describe('SubscribedFilmsComponent', () => {
  let component: SubscribedFilmsComponent;
  let fixture: ComponentFixture<SubscribedFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribedFilmsComponent]
    });
    fixture = TestBed.createComponent(SubscribedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
