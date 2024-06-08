import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Route,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ForminvestService } from 'src/app/Services/forminvest.service';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Details } from '../interface/details';
import { ProfileService } from 'src/app/Services/profile.service';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-wating-details',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,

    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
  ],
  templateUrl: './wating-details.component.html',
  styleUrls: ['./wating-details.component.scss'],
  providers: [],
})
export class WatingDetailsComponent implements OnInit {
  constructor(
    private _ForminvestService: ForminvestService,
    private _http: HttpClient,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _categoriesService: CategoriesService,
    private _ProfileService: ProfileService
  ) {}

  term: string = '';
  file!: any;
  formData = new FormData();
  isLoading: boolean = false;
  investUpdate: any;
  done: number = 0;
  id: any;
  _method: object = { _method: 'get' };
  _method2: object = { _method: 'delete' };
  _method3: object = { _method: 'put' };

  opportunitiesId!: string | null | number;

  details: Details[] = [];

  investForm: FormGroup = new FormGroup({
    category_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    uuid: new FormControl('', []),
    business_name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    amount_needed: new FormControl('', [Validators.required]),
    // remaining_amount: new FormControl('',[Validators.required]),
    potential_risks: new FormControl('', [Validators.required]),
    future_growth: new FormControl('', [Validators.required]),
    products_or_services: new FormControl('', [Validators.required]),
    returns_percentage: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(100),
    ]),
    company_valuation: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    revenues: new FormControl('', [Validators.required]),
    net_profit: new FormControl('', [Validators.required]),
    profit_margin: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(100),
    ]),
    cash_flow: new FormControl('', [Validators.required]),
    ROI: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
  });

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      this.formData.append('photo', file);
    }
  }

  handelForm() {
    this.isLoading = true;

    const formData1 = new FormData();
    formData1.append(
      'category_name',
      this.investForm.get('category_name')?.value
    );
    formData1.append(
      'business_name',
      this.investForm.get('business_name')?.value
    );
    formData1.append('description', this.investForm.get('description')?.value);
    formData1.append(
      'amount_needed',
      this.investForm.get('amount_needed')?.value
    );
    formData1.append(
      'potential_risks',
      this.investForm.get('potential_risks')?.value
    );
    formData1.append(
      'future_growth',
      this.investForm.get('future_growth')?.value
    );
    formData1.append(
      'products_or_services',
      this.investForm.get('products_or_services')?.value
    );
    formData1.append('uuid', this.investForm.get('uuid')?.value);
    formData1.append(
      'returns_percentage',
      this.investForm.get('returns_percentage')?.value
    );
    formData1.append(
      'company_valuation',
      this.investForm.get('company_valuation')?.value
    );
    formData1.append('start_date', this.investForm.get('start_date')?.value);
    formData1.append('end_date', this.investForm.get('end_date')?.value);
    formData1.append('revenues', this.investForm.get('revenues')?.value);
    formData1.append('net_profit', this.investForm.get('net_profit')?.value);
    formData1.append('cash_flow', this.investForm.get('cash_flow')?.value);
    formData1.append(
      'profit_margin',
      this.investForm.get('profit_margin')?.value
    );
    // formData1.append('id',this.id )
    formData1.append('ROI', this.investForm.get('ROI')?.value);
    formData1.append('photo', this.file);
    console.log(this.file);
    console.log(formData1);
    console.log(this.investForm.value);

    let formData = this.investForm.value;

    formData.photo = this.file;

    this._ForminvestService
      .updateForm(formData1, this.opportunitiesId)
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.isLoading = false;

          //  this._router.navigate(['/about-user'])
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
      });
  }

  getInvest() {
    this._categoriesService.getDetails(this.opportunitiesId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.details = res.data;
        this.id = res.data.uuid;
        // console.log(this.investUpdate);
        console.log(this.details);
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  delete() {
    this._ProfileService.delete(this._method2, this.opportunitiesId).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/wating']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  accept() {
    this._ProfileService.accept(this._method3, this.opportunitiesId).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/wating']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.opportunitiesId = params.get('uuid');
      },
    });

    this.getInvest();
  }
}
