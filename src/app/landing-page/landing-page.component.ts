import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule  ,  RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(public dialog: MatDialog ,private _router:Router) {}

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


}
