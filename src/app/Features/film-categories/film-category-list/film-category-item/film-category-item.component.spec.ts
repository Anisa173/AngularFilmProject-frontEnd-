import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryItemComponent } from './film-category-item.component';

describe('FilmCategoryItemComponent', () => {
  let component: FilmCategoryItemComponent;
  let fixture: ComponentFixture<FilmCategoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCategoryItemComponent]
    });
    fixture = TestBed.createComponent(FilmCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
