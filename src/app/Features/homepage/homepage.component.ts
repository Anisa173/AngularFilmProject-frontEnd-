import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Shared/models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Component is initialized!');
  }

  goCustomerLogin($event: User) {
    this.router.navigate(['/customer'], { relativeTo: this.route });
  }

  goAdminLogin($event: User) {
    this.router.navigate(['/admin'], { relativeTo: this.route });
  }
}
