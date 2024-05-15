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

  templateUrl: './home.component .html',
  styleUrls: [
    './home.component .scss',
    './home.component .scss',
    './homeOtherSec.scss',
    './homeSections .scss'
  ],
})
export class HomeComponent {
  userName: string = '';
  constructor(public dialog: MatDialog, private _router: Router) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogboxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  signOut() {
    localStorage.removeItem('userToken');

    this._router.navigate(['/signIn']);
  }
}
