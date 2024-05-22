import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Films } from 'src/app/Shared/models/films';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { FilmService } from 'src/app/Shared/services/film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css'],
})
export class FilmItemComponent implements OnInit {
  @Output() deletedItem = new EventEmitter<void>();
  @Output() itemFreeSelected = new EventEmitter<Films>();
  @Output() itemFreeSelectedC = new EventEmitter<Films>();
  @Output() itemPaidSelected = new EventEmitter<Films>();
  @Output() itemSelected = new EventEmitter<Films>();
  @Input() selectedFreeItem!: Films;
  @Input() selectedPaidItem!: Films;
  @Input() selectItem!: Films;
  @Input() idFilm!: number;
  @Input() categoryId!: number;
  selectedFreeItem$: Observable<Films> | undefined;
  selectedPaidItem$: Observable<Films> | undefined;
  selectItem$: Observable<Films> | undefined;
  constructor(
    private fService: FilmService,
    private router: Router,
    protected authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idFilm = this.route.snapshot.params['idFilm'];
    const categoryId = this.route.snapshot.params['categoryId'];
    this.selectedFreeItem$ = this.fService.getFreeFilmDetailsById(
      categoryId,
      idFilm
    );
    this.selectedPaidItem$ = this.fService.getPaidFilmDetailsById(
      categoryId,
      idFilm
    );
    this.selectItem$ = this.fService.getFilmCategoryById(idFilm, categoryId);
  }

  deleteItem(idFilm: number, categoryId: number) {
    this.fService.deleteFilm(idFilm, categoryId).subscribe(() => {
      this.deletedItem.emit();
    });
  }
  getFilmDetailsByAdmin(idFilm: number, categoryId: number) {
    this.fService.getFilmDetailsByCategory(idFilm, categoryId).subscribe(() => {
      this.itemSelected.emit();
    });
  }
  getFreeFilmDetails(idFilm: number, categoryId: number) {
    this.fService
      .getFreeFilmDetailsById(idFilm, categoryId)
      .subscribe((selectedItem) => {
        this.itemFreeSelectedC.emit(selectedItem);
      });
  }
  getFreeFilmDetailsByAdmin(idFilm: number, categoryId: number) {
    this.fService
      .getFreeFilmDetailsById(idFilm, categoryId)
      .subscribe((selectedItem) => {
        this.itemFreeSelected.emit(selectedItem);
      });
  }

  getPaidFilmDetails(idFilm: number, categoryId: number) {
    this.fService
      .getPaidFilmDetailsById(idFilm, categoryId)
      .subscribe((selectedItem) => {
        this.itemPaidSelected.emit(selectedItem);
      });
  }
  getPaidFilmDetailsByAdmin(idFilm: number, categoryId: number) {
    this.fService
      .getPaidFilmDetailsById(idFilm, categoryId)
      .subscribe((selectedItem) => {
        this.itemPaidSelected.emit(selectedItem);
      });
  }
  goBack() {
    this.location.back();
  }
}
