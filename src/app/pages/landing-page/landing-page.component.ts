import { ForminvestService } from 'src/app/Services/forminvest.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { MatButtonModule } from '@angular/material/button';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    NavAuthComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './landingSections.scss'],
})
export class LandingPageComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    public dialog: MatDialog,
    private _router: Router,
    private ForminvestService: ForminvestService
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
