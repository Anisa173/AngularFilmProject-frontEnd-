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
  @Output() ItemsFreeA = new EventEmitter<Films>();
  @Output() ItemsFreeC = new EventEmitter<Films>();
  @Output() ItemsPaidA = new EventEmitter<Films>();
  @Output() ItemsPaidC = new EventEmitter<Films>();
  @Output() ItemsC = new EventEmitter<Films>();
  @Output() ItemsA = new EventEmitter<Films>();
  @Input() allFreeItems!: Films[];
  @Input() allPaidItems!: Films[];
  @Input() allItemSelected!: Films[];
  allItemSelected$: Observable<Films[]> | undefined;
  allFreeItems$: Observable<Films[]> | undefined;
  allPaidItems$: Observable<Films[]> | undefined;
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
    console.log('Method is implemented.');
  }
  ngOnInit(): void {
    console.log('Method implemented successfully.');
    const categoryId = this.route.snapshot.params['categoryId'];
    this.allItemSelected$ = this.filmService.getFilmsByCategory(categoryId);
    this.allFreeItems$ = this.filmService.getFreeFilmsBycategory(categoryId);
    this.allPaidItems$ = this.filmService.getPaidFilmsByCategory(categoryId);
  }
  onSelectedFreeFilmsAdmin(itemFilm: Films, categoryId: number) {
    this.filmService
      .getFreeFilmsBycategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsFreeA.emit(itemFilm);
      });
  }
  onSelectedFreeFilmsCustomer(itemFilm: Films, categoryId: number) {
    this.filmService
      .getFreeFilmsBycategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsFreeC.emit(itemFilm);
      });
  }

  onSelectedPaidFilmsAdmin(itemFilm: Films, categoryId: number) {
    this.filmService
      .getPaidFilmsByCategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsPaidA.emit(itemFilm);
      });
  }
  onSelectedPaidFilmsCustomer(itemFilm: Films, categoryId: number) {
    this.filmService
      .getPaidFilmsByCategory(categoryId)
      .subscribe((_itemFilm) => {
        this.ItemsPaidC.emit(itemFilm);
      });
  }

  onSelectedFilmsAdmin(itemFilm: Films, categoryId: number) {
    this.filmService.getFilmsByCategory(categoryId).subscribe((_itemFilm) => {
      this.ItemsA.emit(itemFilm);
    });
  }
  onSelectedFilmsCustomer(itemFilm: Films, categoryId: number) {
    this.filmService.getFilmsByCategory(categoryId).subscribe((_itemFilm) => {
      this.ItemsC.emit(itemFilm);
    });
  }

  onDeletedFree(_allFreeItems: Films[]) {
    this.allFreeItems = this.allFreeItems.filter(
      ($event) => $event != this.selectedFilm
    );
    this.selectedFilm = undefined;
  }
  onDeletedPaid(_allPaidItems: Films[]) {
    this.allPaidItems = this.allPaidItems.filter(
      ($event) => $event != this.selectedFilm
    );
    this.selectedFilm = undefined;
  }
  onDeleted(_allItemSelected: Films[]) {
    this.allItemSelected = this.allItemSelected.filter(
      ($event) => $event != this.selectedFilm
    );
    this.selectedFilm = undefined;
  }
}
