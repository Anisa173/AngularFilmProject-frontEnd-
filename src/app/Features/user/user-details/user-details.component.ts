import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/Shared/models/user';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnChanges, OnInit {
  @Input() userEditable!: User;
  @Output() registrateUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() id!: number;

  userEditable$: Observable<User> | undefined;
  RegistrationForm!: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserDetails(id).subscribe((value: User) => {
      console.log(value);
      this.userEditable = value;

      this.RegistrationForm = new FormGroup({
        fullName: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(40),
            Validators.minLength(20),
          ],
        }),
        email: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(10),
            Validators.email,
          ],
        }),
        password: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(12),
            Validators.minLength(8),
          ],
        }),
        telephoneNo: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(11),
            Validators.minLength(9),
          ],
        }),
        address: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        personalIdentityNo: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        gender: new FormControl('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(4),
          ],
        }),
        age: new FormControl<Number | undefined>(undefined, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        userRole: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      });
      this.fillForm();
    });
  }
  fillForm() {
    this.RegistrationForm.setValue({
      fullName: 'New Name',
      email: 'celaanisa07@gmail.com',
      password: '13Ab@@@nM&',
      telephoneNo: '068356467578',
      address: '',
      personalIdentityNo: '',
      gender: 'Female',
      age: 26,
      userRole: 'ADMIN',
    });
  }
  get fullName() {
    return this.RegistrationForm.controls['fullName'];
  }
  get email() {
    return this.RegistrationForm.controls['email'];
  }
  get password() {
    return this.RegistrationForm.controls['password'];
  }
  get telephoneNo() {
    return this.RegistrationForm.controls['telephoneNo'];
  }
  get address() {
    return this.RegistrationForm.controls['address'];
  }
  get personalIdentityNo() {
    return this.RegistrationForm.controls['personalIdentityNo'];
  }
  get gender() {
    return this.RegistrationForm.controls['gender'];
  }
  get userRole() {
    return this.RegistrationForm.controls['userRole'];
  }
  get age() {
    return this.RegistrationForm.controls['age'];
  }

  onSubmit() {
    console.log(this.RegistrationForm.value);
  }
  createAccount(
    fullName: string,
    email: string,
    password: string,
    telephoneNo: string,
    address: string,
    gender: string,
    userRole: string,
    personalIdentityNo: string,
    age: number
  ) {
    this.userService
      .register(
        fullName,
        email,
        password,
        telephoneNo,
        address,
        gender,
        userRole,
        personalIdentityNo,
        age
      )
      .subscribe((userEditable) => {
        alert('Registration successfull!');
        this.router.navigate(['/useRole'], { relativeTo: this.route });
        this.registrateUser.emit(userEditable);
      });
  }

  ngOnChanges(): void {
    this.userEditable$ = this.userService.getUserDetails(this.id);
  }

  updateAccountdata(userEditable: User) {
    this.userService.updateAccount(userEditable).subscribe((_userEditable) => {
      alert(
        'Your account has been updated sucessfully!Please re-login now or later!'
      );
      this.router.navigate(['user/login'], { relativeTo: this.route });
    });
  }
}
