import { MatSelectModule } from '@angular/material/select';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [CommonModule ,
    MatSelectModule ,
    MatButtonModule, 
    MatMenuModule,
  
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
  
  ],
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent {





  // SinInForm: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^[a-zA-Z0-9_@]{8,}$/),
  //   ]),

investForm:FormGroup = new FormGroup({

  category_name: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(20),
  ]),
  business_name:new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(20),
  ]),
  description: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]),
  amount_needed: new FormControl('',[Validators.required]),
  // remaining_amount: new FormControl('',[Validators.required]),
  potential_risks: new FormControl('',[Validators.required]),
  future_growth: new FormControl('',[Validators.required]),
  products_or_services: new FormControl('',[Validators.required]),
  returns_percentage: new FormControl('', [
    Validators.required,
    Validators.minLength(0),
    Validators.maxLength(100),
  ]),
  company_valuation: new FormControl('',[Validators.required]),
  start_date: new FormControl('',[Validators.required]),
  end_date: new FormControl('',[Validators.required]),
  revenues: new FormControl('',[Validators.required]),
  net_profit: new FormControl('',[Validators.required]),
  profit_margin: new FormControl('', [
    Validators.required,
    Validators.minLength(0),
    Validators.maxLength(100),
  ]),
  cash_flow: new FormControl('',[Validators.required]),
  ROI: new FormControl('',[Validators.required]),
  photo: new FormControl('',[Validators.required ,



  ]),



});













handelForm(){


  console.log(this.investForm.value);
  

}



}
