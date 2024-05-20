import { Component } from '@angular/core';
import { SubscribedFilms } from 'src/app/Shared/models/subscribed-films';
import { SubscribedFilmsService } from 'src/app/Shared/services/subscribed-films.service';

@Component({
  selector: 'app-subscribed-films',
  templateUrl: './subscribed-films.component.html',
  styleUrls: ['./subscribed-films.component.css'],
})
export class SubscribedFilmsComponent {
  constructor(private reviewsFilmService: SubscribedFilmsService) {}

  reviewsFilm!: SubscribedFilms;
  reviewsFilms!: SubscribedFilms[];

  onAdded($event: SubscribedFilms) {
    this.reviewsFilms.push($event);
  }
}
