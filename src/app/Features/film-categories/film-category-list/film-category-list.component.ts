import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmCategory } from 'src/app/Shared/models/film-category';
import { FilmCategoryService } from 'src/app/Shared/services/film-category.service';

@Component({
  selector: 'app-film-category-list',
  templateUrl: './film-category-list.component.html',
  styleUrls: ['./film-category-list.component.css'],
})
export class FilmCategoryListComponent implements OnInit {
  @Output() allCategories = new EventEmitter<FilmCategory>();
  @Input() filmCtegori!: FilmCategory[];
  @Input() filmCategory!: FilmCategory;
  deletedCategory: FilmCategory | undefined;
  constructor(private fcService: FilmCategoryService) {}

  ngOnInit(): void {
    this.fcService.getAllCategories();
  }
  onCategories(filmCategory: FilmCategory) {
    this.fcService.getAllCategories().subscribe((_filmCategory) => {
      this.allCategories.emit(filmCategory);
    });
  }

  deleteItem(filmCtegori: FilmCategory[]) {
    this.filmCtegori = this.filmCtegori.filter(
      ($event) => $event != this.deletedCategory
    );
    this.deletedCategory = undefined;
  }
}
