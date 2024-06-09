import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../Services/profile.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
  ],

  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  // data:{}={

  //   name:"phone",
  //   amount:551555
  // }

  _method: object = { _method: 'get' };
  userInfo: any;
  opportunities: any;
  photoA: any;
  isLoading: boolean = true;
  file!: any;
  uuid: any;
  term: any;
  formData = new FormData();
  constructor(
    private _profileService: ProfileService,
    private _router: Router,
    private _httpClient: HttpClient,
    private _ToastrService: ToastrService,
    private _Renderer2:Renderer2
  ) {}

  payForm: FormGroup = new FormGroup({
    name: new FormControl('', []),
    amount: new FormControl('', []),
  });

  adminForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      // Validators.required,
    ]),
    pass: new FormControl('', [
      // Validators.required,
    ]),

    email: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  });
  commissionForm: FormGroup = new FormGroup({
    commission_amount: new FormControl('', [Validators.required]),
  });

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file = file;

    this.formData.append('photo', file);

    this._httpClient
      .post(
        `https://malamute-optimum-recently.ngrok-free.app/api/update-profile`,
        this.formData
      )
      .subscribe({
        next: (res:any) => {

          window.location.reload();
          this._ToastrService.success(res.message)
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  sandCommission(uuid: any) {
    console.log(this.term);

    const com = this.commissionForm.value;

    this._profileService.updatecom(uuid, com).subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log(res);
        this.commissionForm.value.commission_amount = '';
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }

  getData() {
    this._profileService.getData(this._method).subscribe({
      next: (res) => {
        this.userInfo = res.data;
        this.photoA = res.photo;
        this.opportunities = res.opportunities;
        this.uuid = res.opportunities;

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  saveDate() {
    const formData1 = new FormData();
    formData1.append('name', this.adminForm.get('name')?.value);
    formData1.append('pass', this.adminForm.get('pass')?.value);
    formData1.append('email', this.adminForm.get('email')?.value);

    this._profileService.update(formData1).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)

        window.location.reload();

        this.isLoading = false;
        console.log(res);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}

// handelForm() {
//  console.log(this.payForm.value);

//    this._ProfileService.getpay(this.payForm.value).subscribe({
//       next: (res) => {
//        console.log(res);

//         if(res.status==true){

//           window.open(res.data.url ,'_self')

//         }
//       },
//       error: (err) => {

//         console.log();

//       },
//     });
//   }

// handelFormm() {
//   let name = this.lo.value;
//  this.channame= 'ahmed Mahmoud'
// this.name=name.name
// this.des=name.about;

// this.name2= this.lo.value.name
// this.des= this.lo.value.about

// console.log(this.businessForm.value);
// }

// onFileSelected(event: any) {
//   const file: File = event.target.files[0];
//   this.file = file;

//   this.formData.append('photo', file);

//   this._httpClient
//     .post(
//       `https://working-cockatoo-singularly.ngrok-free.app/api/update-profile`,
//       this.formData
//     )
//     .subscribe({
//       next: (res) => {
//         console.log(res);
//         this._Router.navigate(['/about-user']);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
// }
