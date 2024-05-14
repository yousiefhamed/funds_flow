import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about-investor',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './about-investor.component.html',
  styleUrls: ['./about-investor.component.scss']
})
export class AboutInvestorComponent {

  visible: boolean = false

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutInvestorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
