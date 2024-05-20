import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Shared/models/user';
import { UserLogin } from 'src/app/Shared/models/user-login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  goAdmin($event: User) {
    this.router.navigate(['/admin'], { relativeTo: this.route });
  }
}
