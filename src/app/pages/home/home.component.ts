import { SignUpUserComponent } from './../sign-up-user/sign-up-user.component';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
  ],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userName: string = '';
  bussines:string='';
  constructor( private _router: Router) {}


  // res.data.role=="bussines"
// if(){


// this.
// }
                                                      






  signOut() {
    localStorage.removeItem('userToken');

    this._router.navigate(['/signIn']);
  }
}
