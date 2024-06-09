import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Details } from '../interface/details';
import { MatTabsModule } from '@angular/material/tabs';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Categories } from '../interface/categories';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,

    RouterLinkActive,
  
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _categoriesService: CategoriesService
  ) {}

  detailsID!: string | number | null;
  details: Details[] = [];
  categories: Categories[] = [];
  _method: object = { _method: 'get' };
  step1: boolean = true;
  step2: boolean = false;
  displayError!: string;
  isLoading: boolean = false;

  categoreyName: [] = [];





  paymentForm: FormGroup = new FormGroup({
    uuid: new FormControl('',),
    amount: new FormControl('',  Validators.required),
  });


  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.detailsID = params.get('uuid');
      },
    });

    this.getDetails();
  }

  getAllGategories() {
    this._categoriesService.getCategories(this._method).subscribe({
      next: (res) => {
        // console.log(res.data);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDetails() {
    this._categoriesService.getDetails(this.detailsID).subscribe({
      next: (res) => {
        console.log(res);
        this.details = res.data;
        this.categoreyName = res.CategoryName;
        console.log(this.details);
        console.log(this.categoreyName);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendAmount() {
    let formData = this.paymentForm.value;
    formData.uuid = this.detailsID;
    console.log(formData);
     this.isLoading=true;
    this._categoriesService.getpay(formData).subscribe({
      next: (res) => {
        console.log(res);

        if (res.status == true) {
          window.open(res.data, '_self');
        }
        this.isLoading=false;

      },

      error: (err) => {
        console.log(err);

        this.displayError = err.error.message;
        this.isLoading=false;

      },
    });
  }

  investNaw() {
    this.step1 = false;
    this.step2 = true;
  }
  backInvest() {
    this.step1 = true;
    this.step2 = false;
  }


  // export function greaterThan100Validator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const value = control.value;
  //     return value > 100 ? null : { 'greaterThan100': true };
  //   };


}
