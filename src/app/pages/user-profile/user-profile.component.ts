import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Services/profile.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { disable } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userID!: string | null | number;
  user: any;
  photo: string = '';
  name: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProfileService: ProfileService,
    private _ToastrService: ToastrService,
    private _Renderer2:Renderer2
  ) {}

  investorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    national_id: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    gender: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  });

  getData() {
    this._ProfileService.getUserData(this.userID).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res.data;
        this.photo = res.data.photo;
        this.name = res.data.name;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  approved(id: any , element:HTMLButtonElement) {

this._Renderer2.setAttribute(element ,'disabled' ,'true')
    this._ProfileService.approved(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message)
        this._Renderer2.removeAttribute(element ,'disabled')

      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(element ,'disabled' )

      },
    });
  }

  disapproved(id: any ,element:HTMLButtonElement) {
    this._Renderer2.setAttribute(element ,'disabled' ,'true')

    this._ProfileService.disapproved(id).subscribe({
      next: (res) => {
        this._Renderer2.removeAttribute(element ,'disabled')

        console.log(res);
        this._ToastrService.success(res.message)

      },
      error: (err) => {

        this._Renderer2.removeAttribute(element ,'disabled')

        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.userID = params.get('id');
      },
    });

    this.getData();
  }
}
