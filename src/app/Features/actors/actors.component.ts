import { Component } from '@angular/core';
import { Actors } from 'src/app/Shared/models/actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent {
  actor!: Actors;
  actora!: Actors[];

  onAdded($event: Actors) {
    this.actora.push($event);
  }
}
