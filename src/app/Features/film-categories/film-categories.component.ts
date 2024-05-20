import { Component } from '@angular/core';
import { FilmCategory } from 'src/app/Shared/models/film-category';
import { FilmCategoryService } from 'src/app/Shared/services/film-category.service';

@Component({
  selector: 'app-film-categories',
  templateUrl: './film-categories.component.html',
  styleUrls: ['./film-categories.component.css'],
})
export class FilmCategoriesComponent {
  constructor(private fcService: FilmCategoryService) {}

  filmCateg!: FilmCategory;
  filmCategs!: FilmCategory[];

  onAdded($event: FilmCategory) {
    this.filmCategs.push($event);
  }
}
