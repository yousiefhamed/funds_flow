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
import { Meta, Title } from '@angular/platform-browser';

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
    './homeSections .scss',
  ],
})
export class HomeComponent {
  userName: string = '';
  constructor(
    private titleService: Title,
    private metaService: Meta,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.titleService.setTitle(
      'Funds Flow | Connecting Businesses with Investors for Seamless Funding'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Funds Flow is a platform where businesses meet investors. Discover investment opportunities and streamline the funding process with our comprehensive services.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'investment platform, business funding, meet investors, investment opportunities, startup funding, small business investment',
    });
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    });
  }

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
