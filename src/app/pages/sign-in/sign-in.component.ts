import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CommonModule,
  formatCurrency,
  getLocaleMonthNames,
} from '@angular/common';
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
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
  ],

  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  errMsg: string = '';
  isLoading: boolean = false;
  subObject!: Subscription;

  passwordShown: boolean = false;
  constructor(private _router: Router, private _AuthService: AuthService) {}

  SinInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_@]{8,}$/),
    ]),
  });

  handelForm() {
    this.errMsg = '';
    this.isLoading = true;
    const userDate = this.SinInForm.value;
    if (this.SinInForm.valid) {
      this.subObject = this._AuthService.Signin(userDate).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.message == 'User Logged In Successfully') {
            localStorage.setItem('userToken', res.token);
            this._router.navigate(['/home']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }

  showPassword() {
    this.passwordShown = !this.passwordShown;
  }
}
