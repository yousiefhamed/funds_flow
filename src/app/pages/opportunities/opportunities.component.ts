import { Opportunites } from './../interface/opportunites';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { FormsModule } from '@angular/forms';
import { SearchOppoPipe } from '../pipe/search-oppo.pipe';
import { ForminvestService } from 'src/app/Services/forminvest.service';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [CommonModule ,FormsModule , SearchOppoPipe ,RouterLink],
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent  implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute , private _categoriesService:CategoriesService ,private _ForminvestService:ForminvestService){}
  opportunitiesId!:string|null|number;
  term:string='';
  opportunites:Opportunites[]=[]

 
ngOnInit(): void {
  
  this._ActivatedRoute.paramMap.subscribe({

    next:(params)=>{

      this.opportunitiesId=  params.get('uuid')

    }
  })



this.getOppor()

}






getOppor(){

  this._categoriesService.getOpportunities(this.opportunitiesId).subscribe({

    next:(res)=>{
    
    console.log(res);
    this.opportunites=res.data
    
    
    console.log(this.opportunites);
    
    },
    error:(err)=>{
    
      console.log(err);
      
    }
    
    
      })
      
}





}