import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Actors } from 'src/app/Shared/models/actors';
import { ActorsService } from 'src/app/Shared/services/actors.service';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css'],
})
export class ActorItemComponent implements OnInit {
  @Output() actorDetailsA = new EventEmitter<Actors>();
  @Output() actorDetailsC = new EventEmitter<Actors>();
  @Output() actorDeleted = new EventEmitter<Actors>();
  @Input() actorRecord!: Actors;
  actorId!: number;
  @Input() filmId!: number;
  actorRecord$: Observable<Actors> | undefined;
  // actorRecordi!: Actors;
  constructor(
    private aService: ActorsService,
    protected authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idF = this.route.snapshot.params['filmId'];
    const actId = this.route.snapshot.params['actorId'];
    this.actorRecord$ = this.aService.getActorByFilmId(idF, actId);
  }
  onSelectActorByAdmin(actorId: number, filmId: number) {
    this.aService.getActorByFilmId(actorId, filmId).subscribe((actorRecord) => {
      this.actorDetailsA.emit(actorRecord);
    });
  }
  onSelectActorByCustomer(actorId: number, filmId: number) {
    this.aService.getActorByFilmId(actorId, filmId).subscribe((actorRecord) => {
      this.actorDetailsC.emit(actorRecord);
    });
  }
  deleteItem(actorId: number, filmId: number) {
    this.aService.deleteFilmActor(actorId, filmId).subscribe(() => {
      this.actorDeleted.emit();
    });
  }
  goBack() {
    this.location.back();
  }
}
