import { Categories } from './../interface/categories';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';
import { RouterLink } from '@angular/router';

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

  constructor(private _profileService: ProfileService) {}

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

  delete(uuid: any) {
    this._profileService.delete(this._method2, uuid).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  accept(uuid: any) {
    this._profileService.accept(this._method3, uuid).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
