import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Shared/models/user';
import { UserService } from 'src/app/Shared/services/user.service';
import { AuthService } from 'src/app/Shared/services/auth.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();
  selectedUsers!: User;
  selectedUser1!: User | undefined;
  @Input() allUsers!: User[];

  constructor(
    private userServices: UserService,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('Component is initialized successfully!');
    this.userServices.getAllUsers();
  }

  onSelected(user: User) {
    this.userServices.getAllUsers().subscribe((_user) => {
      this.selectedUser.emit(user);
    });
  }
  deleteUser(allUsers: User[]) {
    this.allUsers = this.allUsers.filter((user) => user !== this.selectedUser1);
    this.selectedUser1 = undefined;
  }
}
