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
import { CategoriesService } from 'src/app/Services/categories.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NavAuthComponent,
  ],

  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  {

  errMsg: string = '';
  isLoading: boolean = false;
  subObject!: Subscription;

  constructor( public dialog: MatDialog ,private _router: Router, private _AuthService: AuthService ) {}




  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogboxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }




  









 

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
  
     this._AuthService.Signin(userDate).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if (res.message == 'User Logged In Successfully') {
            localStorage.setItem('userToken', res.token);
            localStorage.setItem('role', res.data.role);
            this._router.navigate(['/home']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errMsg = err.error.message;
          this.isLoading = false;
console.log(err);

        },
      });
  
  }



  // openDialog(
  //   enterAnimationDuration: string,
  //   exitAnimationDuration: string
  // ): void {
  //   this.dialog.open(DialogboxComponent, {
  //     width: '250px',
  //     // data:'right click',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }



}
