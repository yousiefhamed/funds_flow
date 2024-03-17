import { Component } from '@angular/core';
import { CommonModule, formatCurrency, getLocaleMonthNames } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-sign-business',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule,HttpClientModule,AppRoutingModule ,],
  templateUrl: './sign-business.component.html',
  styleUrls: ['./sign-business.component.scss']
})
export class SignBusinessComponent {

  

SinUpForm:FormGroup = new FormGroup({

  companyName:new FormControl('',[Validators.required ,Validators.minLength(4),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required ,Validators.email]),
  desc:new FormControl('',[Validators.required ,Validators.minLength(20)]),
                                                                                    // day                  month             years
  detaOfEsta:new FormControl('',[Validators.required,Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012]) [\/\-]\d{4}$/)]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6}$/)])
  
  
  
  })
  
  

}
