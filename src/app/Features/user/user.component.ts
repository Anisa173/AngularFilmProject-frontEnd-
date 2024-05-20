import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { User } from 'src/app/Shared/models/user';
import { UserLogin } from 'src/app/Shared/models/user-login';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  constructor(protected auth: AuthService, private us: UserService) {}

  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  user!: User;
  users!: User[];
  loginUser!: UserLogin;

  onAdded($event: User) {
    this.users.push($event);
  }
}
