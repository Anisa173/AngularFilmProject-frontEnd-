import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryListComponent } from './film-category-list.component';

describe('FilmCategoryListComponent', () => {
  let component: FilmCategoryListComponent;
  let fixture: ComponentFixture<FilmCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCategoryListComponent]
    });
    fixture = TestBed.createComponent(FilmCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
