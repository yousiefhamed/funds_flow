import { Categories } from './../interface/categories';
import { CategoriesService } from './../../Services/categories.service';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuttextPipe } from '../pipe/cuttext.pipe';
import { FormsModule } from '@angular/forms';
import { SearchhPipe } from '../pipe/searchh.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,CuttextPipe ,SearchhPipe,FormsModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  implements   OnInit{
  constructor(private  _categoriesService:CategoriesService){}
  
  term:string='';
  categories:Categories[]=[];
_method:object={ _method:'get'}




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



  ngOnInit(): void {

    this.getAllGategories()
  
  }
}
