import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from 'src/app/Shared/models/user-login';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  @Input() userloginDetails!: UserLogin;
  //email = '';
  //password = '';

  @ViewChild('loginForm') signInForm!: NgForm;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}

  loginUser(signInForm: NgForm) {
    console.log(signInForm);
    console.log(signInForm.value.emailAdressField);
    console.log(signInForm.value.passwordField);
    console.log(signInForm.value.termsField);
  }
  login() {
    this.authService
      .login(this.userloginDetails.email, this.userloginDetails.password)
      .subscribe({
        next: () => {
          alert('You are authenticated!');
          console.log('Login successfull!');
        },
        error: (error) => {
          alert('Login failed!Your username or password is incorrect');
          console.error(error);
          this.router.navigate(['user/update/:id'], { relativeTo: this.route });
        },
      });
  }

  goHome() {
    this.router.navigate(['/homepage'], { relativeTo: this.route });
  }
}
