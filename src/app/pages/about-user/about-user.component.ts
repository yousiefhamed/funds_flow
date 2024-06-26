import { ProfileService } from './../../Services/profile.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AboutInvestorComponent } from '../dialog-user/about-investor/about-investor.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss'],
})
export class AboutUserComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _profileService: ProfileService,
    private _httpClient: HttpClient,
    private _Router: Router,
    private _categoriesService: CategoriesService,
    private _Renderer2:Renderer2,
    private _ToastrService:ToastrService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutInvestorComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  _method: object = { _method: 'get' };
  _method2: object = { _method: 'put' };
  _method3: object = { _method: 'delete' };
  data: any;
  photo: any;
  photoB: string = '';
  opportunites: any;
  opportunities: any;
  investment_history: any;
  business_opportunities: any;
  file!: any;
  formData = new FormData();
  isLoading: boolean = false;
  roleInvestor: string = '';
  roleBuss: string = '';
  opportunitiesId: any;
  checkData:any
  investorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    about: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    email: new FormControl('', [
      Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    national_id: new FormControl('', [
      Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    phone: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    nationality: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    gender: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    // photo: new FormControl('', [
    //     // Validators.required,
    //     // Validators.minLength(3),
    //     // Validators.maxLength(15),
    //   ]),

    age: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  });

  businessForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      // Validators.required,
    ]),
    description: new FormControl('', [
      // Validators.required,
    ]),

    email: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    age: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    tax_card_number: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    phone: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    nationality: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    current_address: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    // photo: new FormControl('', [
    //     // Validators.required,
    //     // Validators.minLength(3),
    //     // Validators.maxLength(15),
    //   ]),
  });

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file = file;

    this.formData.append('photo', file);

    this._httpClient
      .post(
        ` https://malamute-optimum-recently.ngrok-free.app/api/update-profile`,
        this.formData
      )
      .subscribe({

        next: (res:any) => {
          console.log(res);
          window.location.reload()
          this._ToastrService.success(res.message)
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getData() {
    this._profileService.getData(this._method).subscribe({

      next: (res) => {
        console.log(res);
   
        this.photo=res

        if (res.role == 'investor') {
          this.checkData = res.data;
          this.data = res.data.investor;
          this.roleInvestor = res.role;
        } else if (res.role == 'business') {
          this.roleBuss = res.role;
          this.data = res.data.business;
          this.checkData = res.data
          this.opportunities = res.business_opportunities;
          this.investment_history = res.investment_history;
        } else {
          console.log(' not found');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  update() {
    if (this.roleBuss) {
      const formData1 = new FormData();
      formData1.append('name', this.businessForm.get('name')?.value);
      formData1.append(
        'current_address',
        this.businessForm.get('current_address')?.value
      );
      formData1.append(
        'nationality',
        this.businessForm.get('nationality')?.value
      );
      formData1.append('phone', this.businessForm.get('phone')?.value);
      formData1.append(
        'tax_card_number',
        this.businessForm.get('tax_card_number')?.value
      );
      formData1.append('email', this.businessForm.get('email')?.value);
      formData1.append(
        'description',
        this.businessForm.get('description')?.value
      );
      // formData1.append('photo',this.file)
      // console.log(this.investorForm.value);
      // console.log(this.file);
      //  console.log(formData1);
      this.isLoading = true;
      console.log(this.businessForm.value);

      this._profileService.update(formData1).subscribe({
        next: (res) => {
          window.location.reload();
          this._ToastrService.success(res.message)

          this.isLoading = false;
          console.log(res);
          this.opportunitiesId = res.id;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        },
      });
    } else if (this.roleInvestor) {
      const formData1 = new FormData();
      formData1.append('name', this.investorForm.get('name')?.value);
      formData1.append('age', this.investorForm.get('age')?.value);
      formData1.append('gender', this.investorForm.get('gender')?.value);
      formData1.append(
        'nationality',
        this.investorForm.get('nationality')?.value
      );
      formData1.append('phone', this.investorForm.get('phone')?.value);
      formData1.append(
        'national_id',
        this.investorForm.get('national_id')?.value
      );
      formData1.append('email', this.investorForm.get('email')?.value);
      formData1.append('about', this.investorForm.get('about')?.value);
      // formData1.append('photo',this.file)
      // console.log(this.investorForm.value);
      // console.log(this.file);
      //  console.log(formData1);
      this.isLoading = true;
      console.log(this.businessForm.value);
      this._profileService.update(formData1).subscribe({
        next: (res) => {
          this.isLoading = false;
          this._ToastrService.success(res.message)
          window.location.reload();
          console.log(res);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        },
      });
    }
  }

  updateForm() {
    this._categoriesService.getOpportunities(this.opportunitiesId).subscribe({
      next: (res) => {
        console.log(res);
        this.opportunites = res.data;
        this._ToastrService.success(res.message)

        console.log(this.opportunites);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  handelForm() {
    //   let name = this.lo.value;
    //  this.channame= 'ahmed Mahmoud'
    // this.name=name.name
    // this.des=name.about;

    // this.name2= this.lo.value.name
    // this.des= this.lo.value.about

    console.log(this.investorForm.value);
  }

  delete(uuid: any) {
    this._categoriesService.delete(uuid).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message)
       window.location.reload()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
