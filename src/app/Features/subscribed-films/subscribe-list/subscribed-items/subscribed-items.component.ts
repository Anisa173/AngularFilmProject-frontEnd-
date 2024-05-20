import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubscribedFilms } from 'src/app/Shared/models/subscribed-films';
import { SubscribedFilmsService } from 'src/app/Shared/services/subscribed-films.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
@Component({
  selector: 'app-subscribed-items',
  templateUrl: './subscribed-items.component.html',
  styleUrls: ['./subscribed-items.component.css'],
})
export class SubscribedItemsComponent implements OnInit {
  @Input() filmFreeSub!: SubscribedFilms;
  @Input() id!: number;
  @Input() idFilm!: number;
  @Input() filmPaidSub!: SubscribedFilms;
  @Input() filmSub!: SubscribedFilms;
  @Output() filmFreeSubscribed = new EventEmitter<SubscribedFilms>();
  @Output() filmPaidSubscribed = new EventEmitter<SubscribedFilms>();
  @Output() filmSubscribed = new EventEmitter<SubscribedFilms>();
  filmSub$: Observable<SubscribedFilms> | undefined;
  filmFreeSub$: Observable<SubscribedFilms> | undefined;
  filmPaidSub$: Observable<SubscribedFilms> | undefined;
  constructor(
    private reviewService: SubscribedFilmsService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const id1 = this.route.snapshot.params['idFilm'];
    this.filmFreeSub$ = this.reviewService.getSubscribedFreeFilmByUserId(
      id,
      id1
    );
    this.filmPaidSub$ = this.reviewService.getSubscribedPaidFilmByUserId(
      id,
      id1
    );
    this.filmSub$ = this.reviewService.getFilmReviewsByUserId(id, id1);
  }

  onSelectedFree(id: number, idFilm: number) {
    this.reviewService
      .getSubscribedFreeFilmByUserId(id, idFilm)
      .subscribe((filmFreeSub) => {
        this.filmFreeSubscribed.emit(filmFreeSub);
      });
  }
  onSelectedPaid(id: number, idFilm: number) {
    this.reviewService
      .getSubscribedPaidFilmByUserId(id, idFilm)
      .subscribe((filmPaidSub) => {
        this.filmPaidSubscribed.emit(filmPaidSub);
      });
  }

  onSelectedByItemFilmReviews(id: number, idFilm: number) {
    this.reviewService
      .getFilmReviewsByUserId(id, idFilm)
      .subscribe((filmSub) => {
        this.router.navigate(['/reviews/{idFilm}']);
        this.filmSubscribed.emit(filmSub);
      });
  }
  onSelectedByItemUserReviews(id: number, idFilm: number) {
    this.reviewService
      .getFilmReviewsByUserId(id, idFilm)
      .subscribe((filmSub) => {
        this.router.navigate(['/reviews/{id}']);
        this.filmSubscribed.emit(filmSub);
      });
  }
}
