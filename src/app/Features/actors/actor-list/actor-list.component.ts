import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Actors } from 'src/app/Shared/models/actors';
import { ActorsService } from 'src/app/Shared/services/actors.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  @Output() actorList = new EventEmitter<Actors>();
  @Input() idFilm!: number;
  @Input() actorFilm!: Actors;
  @Input() actorsF!: Actors[];
  actorFilmi!: Actors;
  selectedActor!: Actors | undefined;
  actorsF$: Observable<Actors[]> | undefined;
  constructor(
    private actService: ActorsService,
    private route: ActivatedRoute
  ) {}

  onSelectedItems(idFilm: number, actorsFilm: Actors) {
    this.actService.getAllActorsByFilmId(idFilm).subscribe((_actorsFilm) => {
      this.actorList.emit(actorsFilm);
    });
  }
  onDeleted(_actorsF: Actors[]) {
    this.actorsF = this.actorsF.filter(
      ($event) => $event !== this.selectedActor
    );
    this.selectedActor = undefined;
  }

  ngOnInit() {
    const id1 = this.route.snapshot.params['idFilm'];
    this.actorsF$ = this.actService.getAllActorsByFilmId(id1);
  }
}
