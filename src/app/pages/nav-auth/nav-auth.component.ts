import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule ,   RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent {
  constructor(public dialog: MatDialog ,private _router:Router) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogboxComponent, {
      width: '250px',
      // data:'right click',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  // openDialog(

  //   this.dialog.open(DialogboxComponent, {
  //     width: '250px',
  //     data:'right click',
  //   });
  // }



}
