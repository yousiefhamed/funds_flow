import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ForgetPasswordService } from 'src/app/Services/forget-password.service';
import { Router } from '@angular/router';
import {
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnDestroy {
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  displayMassage: string = '';
  errorMassage: string = '';
  isLoading: boolean = false;
  ForgetSubObject!: Subscription;
  resetCodeSubObject!: Subscription;
  resetPassSubObject!: Subscription;

  constructor(
    private _forgetPasswordService: ForgetPasswordService,
    private _router: Router
  ) {}

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  resetCodeForm: FormGroup = new FormGroup({
    otp: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });
  resetPasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{3,}$/),
    ]),

    password_confirmation: new FormControl(null, [
      Validators.required,
      RxwebValidators.compare({ fieldName: 'password' }),
    ]),
  });

  forgetPassword() {
    this.errorMassage = '';
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;
    this.isLoading = true;
    if (this.forgetForm.valid) {
      this.ForgetSubObject = this._forgetPasswordService
        .ForgetPassword(userEmail)
        .subscribe({
          next: (Response) => {
            this.displayMassage = Response.message;
            this.isLoading = false;
            if (Response.status == true) {
              this.step1 = false;
              this.step2 = true;
            }
          },

          error: (err: HttpErrorResponse) => {
            this.errorMassage = err.error.message;
            this.isLoading = false;
          },
        });
    }
  }

  resetCode() {
    this.errorMassage = '';
    let resetCode = this.resetCodeForm.value;
    resetCode.email = this.email;
    this.isLoading = true;
    if (this.resetCodeForm.valid) {
      this.resetCodeSubObject = this._forgetPasswordService.resetCode(resetCode).subscribe({
          next: (Response) => {
            // console.log(Response);
            
            // this.displayMassage = Response.message;
            this.errorMassage = Response.message;
                // console.log(Response.message);

            this.isLoading = false;
            if (Response.status == true) {
              this.errorMassage ='';
              this.step2 = false;
              this.step3 = true;
            }
          },
          error: (err: HttpErrorResponse) => {
            // console.log(err);
            this.errorMassage = err.message;
            console.log(err.message);
            
            this.isLoading = false;
          },
        });
    }
  }

  resetPassword() {
    this.errorMassage = '';
    let resetPassword = this.resetPasswordForm.value;
    resetPassword.email = this.email;
    this.isLoading = true;
    if (this.resetPasswordForm.valid) {
      this.resetPassSubObject = this._forgetPasswordService.resetPassword(resetPassword).subscribe({
          next: (res) => {
            console.log(res);
            
            this.displayMassage = res.massege;
            this.isLoading = false;
 
            if (res.status == true) {
              this._router.navigate(['/signIn']);
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            
            this.errorMassage = err.message;
            this.isLoading = false;
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.ForgetSubObject?.unsubscribe();
    this.resetPassSubObject?.unsubscribe();
    this.resetCodeSubObject?.unsubscribe();
  }

  backLogin() {
    this._router.navigate(['/signIn']);
  }

  backEnterEmail() {
    this.step1 = true;
    this.step2 = false;
    this.resetCodeSubObject?.unsubscribe();
  }

  backResetCode() {
    this.step2 = true;
    this.step3 = false;
    this.resetPassSubObject?.unsubscribe();
  }
}
