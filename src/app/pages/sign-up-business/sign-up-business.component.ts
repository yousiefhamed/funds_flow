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
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Routes,
} from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up-business',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
    RxReactiveFormsModule,
  ],

  templateUrl: './sign-up-business.component.html',
  styleUrls: ['./sign-up-business.component.scss'],
})
export class SignUpBusinessComponent implements OnDestroy {
  errMsg: string = '';
  isLoading: boolean = false;
  errorEmail: string = '';
  errorNational_id: string = '';
  errorDate: string = '';
  subObject!: Subscription;

  constructor(private _router: Router, private _authService: AuthService) {}

  SinUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
      tax_card_number: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{12}$/),
      // Validators.maxLength(12),
      // Validators.minLength(12),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    // date_of_establishment: new FormControl('', [
    //   Validators.required,
    // Validators.pattern(
    //   /^ (0[1-9]|1[1,2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)(19|20)\d{2}$/
    // ),
    // ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_@]{8,}$/),
    ]),
  });

  handelForm() {
    this.errMsg = '';
    this.errorEmail = '';
    this.errorNational_id = '';
    this.isLoading = true;
    const userDate = this.SinUpForm.value;
    userDate.role = 'business';
    console.log(this.SinUpForm.value);

    if (this.SinUpForm.valid === true) {
      this.subObject = this._authService.Signup(userDate).subscribe({
        next: (res) => {
          this.isLoading = false;
          this._router.navigate(['/signIn']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.isLoading = false;
          this.errorEmail = err.error.message.email;
          this.errorNational_id = err.error.message.national_id;
          this.errorDate = err.error.message.date_of_establishment;
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.subObject?.unsubscribe();
  }
}
