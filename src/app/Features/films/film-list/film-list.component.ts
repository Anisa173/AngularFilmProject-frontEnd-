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
import { Films } from 'src/app/Shared/models/films';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { FilmService } from 'src/app/Shared/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit, OnChanges {
  @Output() ItemsFree = new EventEmitter<Films>();
  @Output() ItemsPaid = new EventEmitter<Films>();
  allItemSelected!: Films[];
  allItemSelected$: Observable<Films[]> | undefined;
  @Input() categoryId!: number;
  itemFilm!: Films;
  selectedFilm: Films | undefined;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    ('Method implemented successfully.');
    this.route.snapshot.params['categoryId'];
    this.allItemSelected$ = this.filmService.getFilmsByCategory(
      this.categoryId
    );
  }
  onSelectedFreeFilms(itemFilm: Films, categoryId: number) {
    this.filmService
      .getFreeFilmsBycategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsFree.emit(itemFilm);
      });
  }
  onSelectedPaidFilms(itemFilm: Films, categoryId: number) {
    this.filmService
      .getPaidFilmsByCategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsPaid.emit(itemFilm);
      });
  }

  onDeleted(allItemSelected: Films[]) {
    this.allItemSelected = this.allItemSelected.filter(
      ($event) => $event != this.selectedFilm
    );
    this.selectedFilm = undefined;
  }
}
