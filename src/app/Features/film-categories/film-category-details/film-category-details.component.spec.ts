import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryDetailsComponent } from './film-category-details.component';

describe('FilmCategoryDetailsComponent', () => {
  let component: FilmCategoryDetailsComponent;
  let fixture: ComponentFixture<FilmCategoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCategoryDetailsComponent]
    });
    fixture = TestBed.createComponent(FilmCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
