import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogbox',
  standalone: true,
  imports: [CommonModule ,MatDialogModule, MatButtonModule],
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent {
  constructor(public dialogRef: MatDialogRef <DialogboxComponent> , private  _Router:Router) {}


  log(){
    console.log("hello ahmed")
    this._Router.navigate(['/signUpUser'])
  }
  
  logg(){
    console.log("hello ahmed")
    this._Router.navigate(['/signUpBusiness'])
  }

}

