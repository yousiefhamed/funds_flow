import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CommonModule,
  formatCurrency,
  getLocaleMonthNames,
} from '@angular/common';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

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
import { ForgetPasswordService } from 'src/app/Services/forget-password.service';

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
  formData = new FormData();
  email:any=''
  step1:boolean=true;

  step2:boolean=false;
    
  term: string = '';
  file!: any;
  role:string = 'business';

  constructor(private _router: Router, private _authService: AuthService ,private   _forgetPasswordService:ForgetPasswordService) {}

  passwordShown: boolean = false;

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
    id_card_photo: new FormControl('', [
      Validators.required,
    ]),
  });
  resetCodeForm: FormGroup = new FormGroup({
    verification_code: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });



  handelForm() {
    this.errMsg = '';
    this.errorEmail = '';
    this.errorNational_id = '';
    this.isLoading = true;
    // const userDate = this.SinUpForm.value;
    // userDate.role = 'business';
    // console.log(this.SinUpForm.value);
    let userDate = this.SinUpForm.value
    this.email=userDate.email


    const formData1 = new FormData();
    formData1.append('name',this.SinUpForm.get('name')?.value)
    formData1.append('tax_card_number',this.SinUpForm.get('tax_card_number')?.value)
    formData1.append('description',this.SinUpForm.get('description')?.value)
    formData1.append('password',this.SinUpForm.get('password')?.value)
    formData1.append('email',this.SinUpForm.get('email')?.value)
    formData1.append('role',this.role)
    formData1.append('id_card_photo',this.file)
    

    if (this.SinUpForm.valid === true) {
      this.subObject = this._authService.Signup(formData1).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.step1=false;
          this.step2=true;
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

  showPassword() {
    this.passwordShown = !this.passwordShown;
  }

  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.file= file
     this.formData.append('photo', file);
        }
 
  }

  resetCodeSignUp() {
    // this.errorMassage = '';
    let resetCodeSignUp = this.resetCodeForm.value;
    resetCodeSignUp.email = this.email;
    this.isLoading = true;

    this._forgetPasswordService
        .resetCode(resetCodeSignUp)
        .subscribe({
          next: (Response) => {
            // console.log(Response);
          this._router.navigate(['/signIn']);
             this.step1 = false;
              this.step2 = true;
            // this.displayMassage = Response.message;
            // this.errorMassage = Response.message;
            // console.log(Response.message);

            this.isLoading = false;
            // if (Response.status == true) {
            //   this.errorMassage = '';
            //   this.step2 = false;
            //   this.step3 = true;
            // }
          },
          error: (err: HttpErrorResponse) => {
            // console.log(err);
            // this.errorMassage = err.message;
            // console.log(err.message);

            this.isLoading = false;
          },
        });
   
  }



}
