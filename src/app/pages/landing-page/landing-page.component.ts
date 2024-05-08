import { ForminvestService } from 'src/app/Services/forminvest.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { MatButtonModule } from '@angular/material/button';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule  ,  RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    NavAuthComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(public dialog: MatDialog ,private _router:Router ,private ForminvestService:ForminvestService) {}

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






  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    console.log(file);
    
    this.ForminvestService.uploadFile(file).subscribe(
      (response) => {
        console.log('File uploaded successfully', response);
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }

}
