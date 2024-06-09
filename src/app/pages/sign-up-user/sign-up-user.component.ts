import { Component, OnDestroy, Renderer2 } from '@angular/core';
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
import { FileUploadModule } from 'primeng/fileupload';
import { ForgetPasswordService } from 'src/app/Services/forget-password.service';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-sign-up-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
    FileUploadModule,
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
  formData = new FormData();
  passwordShown: boolean = false;
  term: string = '';
  file!: any;
  role: string = 'investor';
  email: any = '';
  step1: boolean = true;

  step2: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _forgetPasswordService: ForgetPasswordService,
    private _Renderer2:Renderer2
  ) {}

  resetCodeForm: FormGroup = new FormGroup({
    verification_code: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });

  SinUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    gender: new FormControl('', [
      Validators.required,
      // Validators.minLength(4),
      // Validators.maxLength(20),
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
    id_card_photo: new FormControl('', [Validators.required]),
  });
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      this.formData.append('photo', file);
    }
  }






  handelForm() {
    this.errMsg = '';
    this.isLoading = true;
    let userDate = this.SinUpForm.value;
    this.email = userDate.email;

    // const userDate = this.SinUpForm.value;
    // userDate.role = 'investor';
    // console.log(this.SinUpForm.value);

    const formData1 = new FormData();
    formData1.append('name', this.SinUpForm.get('name')?.value);
    formData1.append('gender', this.SinUpForm.get('gender')?.value);
    formData1.append('password', this.SinUpForm.get('password')?.value);
    formData1.append('email', this.SinUpForm.get('email')?.value);
    formData1.append('national_id', this.SinUpForm.get('national_id')?.value);
    formData1.append('role', this.role);
    formData1.append('id_card_photo', this.file);
    formData1.append('name', this.SinUpForm.get('name')?.value);
    formData1.append('gender', this.SinUpForm.get('gender')?.value);
    formData1.append('password', this.SinUpForm.get('password')?.value);
    formData1.append('email', this.SinUpForm.get('email')?.value);
    formData1.append('national_id', this.SinUpForm.get('national_id')?.value);
    formData1.append('role', this.role);
    formData1.append('id_card_photo', this.file);

    this.subObject = this._authService.Signup(formData1).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorEmail = err.error.message.email;
        this.errorNational_id = err.error.message.national_id;

        console.log(err);
      },
    });
  }
  // showPassword() {
  //   this.passwordShown = !this.passwordShown;
  // }


  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.file = file;
  //     this.formData.append('photo', file);
  //   }
  // }

  resetCodeSignUp() {
    let resetCodeSignUp = this.resetCodeForm.value;
    resetCodeSignUp.email = this.email;
    this.isLoading = true;

    this._forgetPasswordService.resetCode(resetCodeSignUp).subscribe({
      next: (Response) => {
        // console.log(Response);
        this._router.navigate(['/signIn']);
        this.step1 = false;
        this.step2 = true;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
      },
    });
  }


  




  }

