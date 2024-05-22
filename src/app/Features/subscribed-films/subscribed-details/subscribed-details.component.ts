import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscribedFilms } from 'src/app/Shared/models/subscribed-films';
import { SubscribedFilmsService } from 'src/app/Shared/services/subscribed-films.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/Shared/services/auth.service';
@Component({
  selector: 'app-subscribed-details',
  templateUrl: './subscribed-details.component.html',
  styleUrls: ['./subscribed-details.component.css'],
})
export class SubscribedDetailsComponent implements OnInit {
  constructor(
    private reviewService: SubscribedFilmsService,
    private location: Location,
    protected authService: AuthService
  ) {}
  @Input() reviewFilm!: SubscribedFilms;
  @Output() addReviews: EventEmitter<SubscribedFilms> =
    new EventEmitter<SubscribedFilms>();

  @ViewChild('filmReview') filmReview!: NgForm;

  addFreeReview(reviewFilm: SubscribedFilms) {
    this.reviewService
      .createFilmFreeReview(reviewFilm)
      .subscribe((reviewFilm) => {
        alert('Thanks for your points!');
        this.location.back();
        this.addReviews.emit(reviewFilm);
      });
  }
  addPaidReview(reviewFilm: SubscribedFilms) {
    this.reviewService
      .createFilmPaidReview(reviewFilm)
      .subscribe((reviewFilm) => {
        alert('Thanks for your points!');
        this.location.back();
        this.addReviews.emit(reviewFilm);
      });
  }
  onSubmit(filmReview: NgForm) {
    console.log(filmReview);
    console.log(filmReview.value.reviews);
  }

  ngOnInit(): void {
    console.log('Method is completed!');
  }
}
