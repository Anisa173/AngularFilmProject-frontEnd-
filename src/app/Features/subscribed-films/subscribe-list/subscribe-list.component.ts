import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SubscribedFilms } from 'src/app/Shared/models/subscribed-films';
import { SubscribedFilmsService } from 'src/app/Shared/services/subscribed-films.service';

@Component({
  selector: 'app-subscribe-list',
  templateUrl: './subscribe-list.component.html',
  styleUrls: ['./subscribe-list.component.css'],
})
export class SubscribeListComponent implements OnInit, OnChanges {
  @Output() filmsSubscribed = new EventEmitter<SubscribedFilms>();
  @Output() freeFilmsSub = new EventEmitter<SubscribedFilms>();
  @Output() paidFilmsSub = new EventEmitter<SubscribedFilms>();
  @Input() id!: number;
  @Input() idF!: number;

  filmSubscripted!: SubscribedFilms;

  @Input() allFilmsSub!: SubscribedFilms[];
  constructor(private reviewFilmService: SubscribedFilmsService) {}

  ngOnInit(): void {
    console.log('Method implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method  implemented.');
  }

  selectedItemsByAdmin(filmSubscripted: SubscribedFilms) {
    this.reviewFilmService
      .getAllSubscribedFilmById()
      .subscribe((_filmSubscripted) => {
        this.filmsSubscribed.emit(filmSubscripted);
      });
  }
  selectedFreeSub(id: number, filmSubscripted: SubscribedFilms) {
    this.reviewFilmService
      .getAllFreeSubscribedFilmById(id)
      .subscribe((_filmSubscripted) => {
        this.freeFilmsSub.emit(filmSubscripted);
      });
  }
  selectedPaidSub(id: number, filmSubscripted: SubscribedFilms) {
    this.reviewFilmService
      .getAllPaidSubscribedFilmsById(id)
      .subscribe((_filmSubscripted) => {
        this.paidFilmsSub.emit(filmSubscripted);
      });
  }
  selectFilmsReviewsByUserId(id: number, filmSubscripted: SubscribedFilms) {
    this.reviewFilmService
      .getAllReviewsByUserId(id)
      .subscribe((_filmSubscripted) => {
        this.filmsSubscribed.emit(filmSubscripted);
      });
  }
  selectedUserReviewsByFilmId(idF: number) {
    this.reviewFilmService
      .getAllReviewsByFilmId(idF)
      .subscribe((filmSubscripted) => {
        this.filmsSubscribed.emit(this.filmSubscripted);
      });
  }
}
