import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../interface/user-data';
import { ProfileService } from 'src/app/Services/profile.service';
import { SearchNameUserPipe } from '../pipe/search-name-user.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-manage-bussiness',
  standalone: true,
  imports: [CommonModule ,SearchNameUserPipe, FormsModule ,RouterLink ,RouterLinkActive],
  templateUrl: './manage-bussiness.component.html',
  styleUrls: ['./manage-bussiness.component.scss']
})
export class ManageBussinessComponent {

  term: string = '';
  _method:{}={

    _method:'get'
   }
users:UserData[]=[]
   constructor(private _ProfileService:ProfileService){


   }
 
 

ngOnInit(): void {
  this.getUser()
}

  getUser(){

    this._ProfileService.getBussiness(this._method).subscribe({
      next:(res)=>{
        console.log(res);
        // this.=res.data
        this.users= res.data  
      }, 
      error:(err)=>{
        console.log(err);
        
  
      }
  
    })

  }
}
