import { Component, OnInit } from '@angular/core';
import { CommonModule, formatCurrency, getLocaleMonthNames } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule ,RouterLink ,ReactiveFormsModule, FormsModule,RouterLinkActive],


  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private _router:Router){}     




  SinUpForm:FormGroup = new FormGroup({
  
  email:new FormControl('',[Validators.required ,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
  

  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  handelForm(){
  console.log(this.SinUpForm);
  if(this.SinUpForm.valid){
  this._router.navigate(['/home'])
  
  }
}
} 


