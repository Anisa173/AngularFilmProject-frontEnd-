import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmCategory } from 'src/app/Shared/models/film-category';
import { Films } from 'src/app/Shared/models/films';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { FilmService } from 'src/app/Shared/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit, OnChanges {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fService: FilmService,
    protected authService: AuthService
  ) {}
  @Output() filmForm = new EventEmitter<Films>();
  @Input() idFilm!: number;
  @Input() categoryId!: number;
  @Input() filmModified!: Films;
  category!: FilmCategory[];
  filmModified$: Observable<Films> | undefined;

  @ViewChild('createFilm') createFilm!: NgForm;

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['idFilm'];
    const categoryId = this.route.snapshot.params['categoryId'];
    this.filmModified$ = this.fService.getFilmDetailsByCategory(id, categoryId);
  }
  onSubmit(createFilm: NgForm) {
    console.log(createFilm);
    console.log(createFilm.value.filmTitle);
    console.log(createFilm.value.releaseDate);
    console.log(createFilm.value.url);
    console.log(createFilm.value.fUrl);
    console.log(createFilm.value.mDuration);
    console.log(createFilm.value.cost);
    console.log(createFilm.value.descriptionMovie);
    console.log(createFilm.value.filmC);
    console.log(createFilm.value.sponsorN);
  }

  addFilm(filmModified: Films) {
    this.fService.createFilms(filmModified).subscribe((filmModified) => {
      alert(' Film Registration is done !');
      this.router.navigate(['Films/{categoryId}'], {
        relativeTo: this.route,
      });
      this.filmForm.emit(filmModified);
    });
  }
  updateFilm(filmModified: Films) {
    this.fService.updateDataFilm(filmModified).subscribe((filmModified) => {
      alert('Datas are modified!');
      this.router.navigate(['/read/:categoryId/films'], {
        relativeTo: this.route,
      });
    });
  }
}
