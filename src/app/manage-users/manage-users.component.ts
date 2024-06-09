import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchhPipe } from '../pages/pipe/searchh.pipe';
import { FormsModule } from '@angular/forms';
import { Opportunites } from '../pages/interface/opportunites';
import { SearchOppoPipe } from '../pages/pipe/search-oppo.pipe';
import { ProfileService } from '../Services/profile.service';
import { UserData } from '../pages/interface/user-data';
import { SearchNameUserPipe } from '../pages/pipe/search-name-user.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, SearchNameUserPipe, FormsModule ,RouterLink ,RouterLinkActive],
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
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

    this._ProfileService.getUserName(this._method).subscribe({
      next:(res)=>{
        console.log(res);
        // this.=res.data
        this.users= res.data
         console.log( res.data.business);
  
      }, 
      error:(err)=>{
        console.log(err);
        
  
      }
  
    })
  
  }
  









}
