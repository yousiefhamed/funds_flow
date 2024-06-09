import { Categories } from './../interface/categories';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';
import { ButtonModule } from 'primeng/button';

import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wating',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './wating.component.html',
  styleUrls: ['./wating.component.scss'],
})
export class WatingComponent implements OnInit {
  _method: object = { _method: 'get' };
  _method2: object = { _method: 'delete' };
  _method3: object = { _method: 'put' };

  constructor(
    private _profileService: ProfileService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  term: string = '';
  data: any;
  Categories: any;



  getData() {
    this._profileService.getUnapproved(this._method).subscribe({
      next: (res) => {
        console.log('ddd' + res);

        this.data = res.data;
        this.Categories = res.data.category;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getData();
  }


  reject(uuid: any ,element:HTMLButtonElement) {
    this._Renderer2.setAttribute(element ,'disabled' ,'true')

    this._profileService.delete(this._method2, uuid).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message)
        this._Renderer2.removeAttribute(element ,'disabled')

      },
      error: (err) => {
        this._Renderer2.removeAttribute(element ,'disabled' )

        console.log(err);
      },
    });
  }
  accept(uuid: any ,element:HTMLButtonElement) {
    this._Renderer2.setAttribute(element ,'disabled' ,'true')

    this._profileService.accept(this._method3, uuid).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)
        this._Renderer2.removeAttribute(element ,'disabled')

        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(element ,'disabled' )

      },
    });
  }
}
