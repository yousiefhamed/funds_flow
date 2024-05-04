import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Details } from '../interface/details';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Categories } from '../interface/categories';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule ,MatTabsModule, FormsModule ,RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _categoriesService:CategoriesService){}

detailsID!:string|number|null;

details:Details[]=[];
categories:Categories[]=[];
_method:object={ _method:'get'}

categoreyName:[]=[];





  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({

      next:(params)=>{
  
        this.detailsID=  params.get('id')
  
      }
    })
  
  this.getDetails()
  }





  getAllGategories(){

    this._categoriesService.getCategories(this._method).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categories=res.data
  
      },
      error:(err)=>{
        console.log(err);
        
  
      }
  
    })
  
  }
  







getDetails(){

  this._categoriesService.getDetails(this.detailsID).subscribe({

    next:(res)=>{
      console.log(res);
      this.details=res.data
      this.categoreyName=res.CategoryName
      console.log(this.details);
      console.log(this.categoreyName);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}





}
