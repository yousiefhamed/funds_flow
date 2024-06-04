import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from 'src/app/Services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', './waitingList.scss'],
})
export class AdminComponent  implements OnInit{

  constructor(private _profileService:ProfileService){}
  _method: object = { _method: 'get' };
  userInfo:any;
  isEmailReadOnly: boolean = true;
  isPasswordReadOnly: boolean = true;
  isadminNameReadOnly: boolean = true;
  emailImgSrc: string = './../../../assets/admin/edit-icon.png';
  passwordImgSrc: string = './../../../assets/admin/edit-icon.png';
  adminNameImgSrc: string = './../../../assets/admin/edit-icon-blue.png';

  toggleEditable(field: string) {
    const element = document.getElementById(field);
    if (!element) return;

    switch (field) {
      case 'adminName':
        this.isadminNameReadOnly = !this.isadminNameReadOnly;
        break;
      case 'email':
        this.isEmailReadOnly = !this.isEmailReadOnly;
        break;
      case 'password':
        this.isPasswordReadOnly = !this.isPasswordReadOnly;
        break;
    }

    if (
      !this.isEmailReadOnly ||
      !this.isPasswordReadOnly ||
      !this.isadminNameReadOnly
    ) {
      element.focus();
      switch (field) {
        case 'adminName':
          this.adminNameImgSrc = './../../../assets/admin/check.png';
          break;
        case 'email':
          this.emailImgSrc = './../../../assets/admin/check.png';
          break;
        case 'password':
          this.passwordImgSrc = './../../../assets/admin/check.png';
          break;
      }
    } else {
      this.adminNameImgSrc = './../../../assets/admin/edit-icon-blue.png';
      this.emailImgSrc = './../../../assets/admin/edit-icon.png';
      this.passwordImgSrc = './../../../assets/admin/edit-icon.png';
    }
  }



  getData() {
    this._profileService.getData(this._method).subscribe({
      next: (res) => {
    this.userInfo =res.data
       
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

ngOnInit(): void {
  
  this.getData()
}


}
