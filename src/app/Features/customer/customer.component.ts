import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Shared/models/user';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  navigatoToPayFilms($event: User) {
    this.router.navigate(['/Films/all/paid'], {
      relativeTo: this.route,
    });
  }
}
