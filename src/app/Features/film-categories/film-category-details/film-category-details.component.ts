import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmCategory } from 'src/app/Shared/models/film-category';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { FilmCategoryService } from 'src/app/Shared/services/film-category.service';

@Component({
  selector: 'app-film-category-details',
  templateUrl: './film-category-details.component.html',
  styleUrls: ['./film-category-details.component.css'],
})
export class FilmCategoryDetailsComponent implements OnInit {
  @Output() addedCategory: EventEmitter<FilmCategory> =
    new EventEmitter<FilmCategory>();

  @ViewChild('addCategory') addCategory!: NgForm;
  @Input() addFilmcategory!: FilmCategory;
  constructor(
    private fCategory: FilmCategoryService,
    private router: Router,
    private route: ActivatedRoute,
    protected userAuthenticated: AuthService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(addedCategory: NgForm) {
    console.log(addedCategory);
    console.log(addedCategory.value.categories);
  }

  add(addFilmCategory: FilmCategory) {
    this.fCategory.addFilmCategory(addFilmCategory).subscribe(() => {
      alert('New category is added!');
      this.router.navigate(['/FilmCategory/all'], {
        relativeTo: this.route,
      });
      this.addedCategory.emit();
    });
  }
}
