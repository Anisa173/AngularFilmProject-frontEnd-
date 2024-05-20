import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/models/user';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit, OnChanges {
  @Output() userDetails = new EventEmitter<User>();
  @Output() userUnactivated: EventEmitter<void> = new EventEmitter<void>();
  @Input() id!: number;
  @Input() userI!: User;
  user$: Observable<User> | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.user$ = this.userService.getUserItem(id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method implemented sucessfully.');
  }
  onItemClick(id: number) {
    this.userService.getUserItem(id).subscribe((user) => {
      this.userDetails.emit(user);
      this.router.navigate(['user/update/{id}'], { relativeTo: this.route });
    });
  }
  onDeleted(id: number) {
    this.userService.deleteUser(id).subscribe((user) => {
      this.userUnactivated.emit(user);
    });
  }
}
