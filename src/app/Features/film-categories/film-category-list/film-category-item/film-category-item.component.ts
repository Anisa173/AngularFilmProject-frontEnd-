import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmCategory } from 'src/app/Shared/models/film-category';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { FilmCategoryService } from 'src/app/Shared/services/film-category.service';

@Component({
  selector: 'app-film-category-item',
  templateUrl: './film-category-item.component.html',
  styleUrls: ['./film-category-item.component.css'],
})
export class FilmCategoryItemComponent implements OnInit, OnChanges {
  @Output() deletedItem = new EventEmitter<void>();
  @Output() itemDetails = new EventEmitter<FilmCategory>();
  @Input() filmC!: FilmCategory;
  @Input() idCtg!: number;
  filmC$: Observable<FilmCategory> | undefined;

  constructor(
    private fcService: FilmCategoryService,
    private route: ActivatedRoute,
    private router: Router,
    protected authS: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['idCateg'];
    this.filmC$ = this.fcService.getFilmCategById(id);
  }
  onSelected(idCateg: number) {
    this.fcService.getFilmCategById(idCateg).subscribe((filmC) => {
      this.itemDetails.emit(filmC);
    });
  }
  onDeleted(idCtg: number) {
    this.fcService.delete(idCtg).subscribe((filmC) => {
      this.router.navigate(['FilmCategory/all', { relativeTo: this.route }]);
      this.deletedItem.emit(filmC);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
