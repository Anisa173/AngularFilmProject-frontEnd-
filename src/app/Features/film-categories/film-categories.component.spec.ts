import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoriesComponent } from './film-categories.component';

describe('FilmCategoriesComponent', () => {
  let component: FilmCategoriesComponent;
  let fixture: ComponentFixture<FilmCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCategoriesComponent]
    });
    fixture = TestBed.createComponent(FilmCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
