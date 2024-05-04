import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Routes,
} from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
  ],
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss'],
})
export class SignUpUserComponent {
  errMsg: string = '';
  isLoading: boolean = false;
  errorEmail: string = '';
  errorNational_id: string = '';
  subObject!: Subscription;
  constructor(private _router: Router, private _authService: AuthService) {}

  passwordShown: boolean = false;

  SinUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    national_id: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_@]{8,}$/),
    ]),
  });

  handelForm() {
    this.errMsg = '';
    this.isLoading = true;
    const userDate = this.SinUpForm.value;
    userDate.role = 'investor';
    console.log(this.SinUpForm.value);
    if (this.SinUpForm.valid === true) {
      this.subObject = this._authService.Signup(userDate).subscribe({
        next: (res) => {
          this.isLoading = false;
          this._router.navigate(['/signIn']);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorEmail = err.error.message.email;
          this.errorNational_id = err.error.message.national_id;
        },
      });
    }
  }

  showPassword() {
    this.passwordShown = !this.passwordShown;
  }
}
