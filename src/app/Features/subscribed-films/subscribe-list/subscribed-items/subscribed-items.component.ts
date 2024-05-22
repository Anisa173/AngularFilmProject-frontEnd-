import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubscribedFilms } from 'src/app/Shared/models/subscribed-films';
import { SubscribedFilmsService } from 'src/app/Shared/services/subscribed-films.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-subscribed-items',
  templateUrl: './subscribed-items.component.html',
  styleUrls: ['./subscribed-items.component.css'],
})
export class SubscribedItemsComponent implements OnInit {
  @Input() filmFreeSub!: SubscribedFilms;
  @Input() id!: number;
  @Input() idFilm!: number;
  @Input() filmPaidSubReview!: SubscribedFilms;
  @Input() filmSub!: SubscribedFilms;
  @Input() filmPaidSubric!: SubscribedFilms;
  @Output() filmFreeSubscribedC = new EventEmitter<SubscribedFilms>();
  @Output() filmFreeSubscribedA = new EventEmitter<SubscribedFilms>();
  @Output() filmPaidSubscribed = new EventEmitter<SubscribedFilms>();
  @Output() filmSubscribedReview = new EventEmitter<SubscribedFilms>();
  @Output() filmPaidSub = new EventEmitter<SubscribedFilms>();
  filmSub$: Observable<SubscribedFilms> | undefined;
  filmFreeSub$: Observable<SubscribedFilms> | undefined;
  filmPaidSubReview$: Observable<SubscribedFilms> | undefined;
  filmPaidSubric$: Observable<SubscribedFilms> | undefined;
  constructor(
    private reviewService: SubscribedFilmsService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const id1 = this.route.snapshot.params['idFilm'];
    this.filmFreeSub$ = this.reviewService.getSubscribedFreeFilmByUserId(
      id,
      id1
    );
    this.filmPaidSubReview$ = this.reviewService.getSubscribedPaidFilmByUserId(
      id,
      id1
    );
    this.filmSub$ = this.reviewService.getFilmReviewsByUserId(id, id1);
    this.filmPaidSubric$ = this.reviewService.getPaidFilmUrl(id, id1);
  }

  onSelectedFreeByAdmin(id: number, idFilm: number) {
    this.reviewService
      .getSubscribedFreeFilmByUserId(id, idFilm)
      .subscribe((filmFreeSub) => {
        this.location.back();
        this.filmFreeSubscribedA.emit(filmFreeSub);
      });
  }
  onSelectedFreeByCustomer(id: number, idFilm: number) {
    this.reviewService
      .getSubscribedFreeFilmByUserId(id, idFilm)
      .subscribe((filmFreeSub) => {
        this.location.back();
        this.filmFreeSubscribedC.emit(filmFreeSub);
      });
  }

  onSelectedPaid(id: number, idFilm: number) {
    this.reviewService
      .getSubscribedPaidFilmByUserId(id, idFilm)
      .subscribe((filmPaidSub) => {
        this.location.back();
        this.filmPaidSubscribed.emit(filmPaidSub);
      });
  }

  //Admini vezhgon
  onSelectedByItemFilmReviews(id: number, idFilm: number) {
    this.reviewService
      .getFilmReviewsByUserId(id, idFilm)
      .subscribe((filmSub) => {
        this.router.navigate(['/reviews/{idFilm}']);
        this.filmSubscribedReview.emit(filmSub);
      });
  }
  //Admin,User
  onSelectedByItemUserReviews(id: number, idFilm: number) {
    this.reviewService
      .getFilmReviewsByUserId(id, idFilm)
      .subscribe((filmSub) => {
        this.router.navigate(['/reviews/{id}']);
        this.filmSubscribedReview.emit(filmSub);
      });
  }
  //Customer
  onSelectedPaidFilmMovie(id: number, idFilm: number) {
    this.reviewService
      .getPaidFilmUrl(id, idFilm)
      .subscribe((filmPaidSubric) => {
        this.router.navigate(['/add/paid/{userId}/films']);
        this.filmPaidSub.emit(filmPaidSubric);
      });
  }

  goBack() {
    this.location.back();
  }
}
