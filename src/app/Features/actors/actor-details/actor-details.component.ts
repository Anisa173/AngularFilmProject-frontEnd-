import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Actors } from 'src/app/Shared/models/actors';
import { ActorsService } from 'src/app/Shared/services/actors.service';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { Location } from '@angular/common';
import { Films } from 'src/app/Shared/models/films';
@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  @Output() newActor = new EventEmitter<Actors>();
  film!: Films;
  films!: Films[];
  @Input() actor!: Actors;

  constructor(
    private actorService: ActorsService,
    protected authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private location: Location
  ) {}

  actorsForm!: FormGroup;

  ngOnInit(): void {
    const idFilm = this.route.snapshot.params['idFilm'];
    const actorId = this.route.snapshot.params['actorId'];
    this.actorService
      .getActorFilmById(idFilm, actorId)
      .subscribe((value: Actors) => {
        console.log(value);
        this.actor = value;
        this.actorsForm = this.builder.nonNullable.group({
          fullName: this.builder.nonNullable.control('', {
            validators: [
              Validators.required,
              Validators.maxLength(25),
              Validators.minLength(15),
            ],
          }),
          biography: this.builder.nonNullable.control('', {
            validators: [
              Validators.required,
              Validators.maxLength(2000),
              Validators.minLength(800),
            ],
          }),
          imageUrl: this.builder.nonNullable.control('', {
            validators: Validators.required,
          }),
          grades: this.builder.nonNullable.control('', {
            validators: [
              Validators.required,
              Validators.maxLength(20),
              Validators.minLength(10),
            ],
          }),
          filmTitle: this.builder.nonNullable.control('', {
            validators: [
              Validators.required,
              Validators.maxLength(25),
              Validators.minLength(12),
            ],
          }),
        });
        this.fillForm();
      });
  }
  fillForm() {
    this.actorsForm.setValue({
      fullName: '',
      biography: '',
      imageUrl: '',
      grades: '',
      filmTitle: '',
    });
  }

  get fullName() {
    return this.actorsForm.controls['fullName'];
  }
  get biography() {
    return this.actorsForm.controls['biography'];
  }
  get imageUrl() {
    return this.actorsForm.controls['imageUrl'];
  }
  get grades() {
    return this.actorsForm.controls['grades'];
  }
  get filmTitle() {
    return this.actorsForm.controls['filmTitle'];
  }

  onSubmit() {
    console.log(this.actorsForm.value);
  }

  addActor(actor: Actors) {
    this.actorService.createActor(actor).subscribe((actor) => {
      alert('A new Actor is ADDED!');
      this.router.navigate(['/all/${idFilm}', { relativeTo: this.route }]);
      this.newActor.emit(actor);
    });
  }
  updateAct(actor: Actors) {
    this.actorService.updateActor(actor).subscribe(() => {
      prompt("A new Actor's data is updated successfully");
      this.router.navigate([
        '/retrieve/${idFilm}/actors',
        { relativeTo: this.route },
      ]);
    });
  }
  goBack() {
    this.location.back();
  }
}
