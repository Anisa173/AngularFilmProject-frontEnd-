import { Component } from '@angular/core';
import { Films } from 'src/app/Shared/models/films';
import { FilmService } from 'src/app/Shared/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  constructor(private filmService: FilmService) {}

  film!: Films;
  films!: Films[];

  onAdded($event: Films) {
    this.films.push($event);
  }
}
