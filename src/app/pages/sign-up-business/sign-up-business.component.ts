import { Component, OnInit } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-sign-up-business',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  templateUrl: './sign-up-business.component.html',
  styleUrls: ['./sign-up-business.component.scss'],
})
export class SignUpBusinessComponent implements OnInit {
  constructor() {}

  SinUpForm: FormGroup = new FormGroup({
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    desc: new FormControl('', [Validators.required, Validators.minLength(20)]),
    // day                 signUpUser month             years
    detaOfEsta: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012]) [\/\-]\d{4}$/
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_@]{6}$/),
    ]),
  });

  handelForm() {
    console.log(this.SinUpForm.value);
    console.log('dfsljfdsf');
  }

  ngOnInit(): void {}
}
