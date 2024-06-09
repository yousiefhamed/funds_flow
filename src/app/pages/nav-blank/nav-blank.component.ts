import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  _method: object = { _method: 'get' };
  data: any;
  photo: string | undefined;
  photoB:string='';
  roleInvestor:string='';
  roleBuss:string='';
name:any
  constructor( private _profileService:ProfileService , private _httpClient:HttpClient , private _Router:Router)  {}

  signOut():void{

    localStorage.removeItem('userToken')
    this._Router.navigate(['/signIn'])
  }








  getData(){
    this._profileService.getData1(this._method).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.data=res.data
        this.name= res.name 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleActive() {
    document.querySelector('ul')?.classList.toggle('active');
  }

ngOnInit(): void {
  
  this.getData()
  console.log(this.name);

}
}
