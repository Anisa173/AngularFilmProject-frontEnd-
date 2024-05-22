import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from 'src/app/Shared/models/films';
import { User } from 'src/app/Shared/models/user';
import { UserLogin } from 'src/app/Shared/models/user-login';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  @ViewChild('choice') choice = NgForm;

  goFreeFilms($event: Films[]) {
    this.router.navigate(['Films/all'], { relativeTo: this.route });
  }

  navigatoToPayFilms($event: UserLogin) {
    this.router.navigate(['user/login'], { relativeTo: this.route });
  }
}
