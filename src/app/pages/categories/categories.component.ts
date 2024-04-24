import { CategoriesService } from './../../Services/categories.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Categories } from '../interface/categories';
import { CuttextPipe } from '../pipe/cuttext.pipe';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,CuttextPipe],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  implements   OnInit{
  constructor(private  _categoriesService:CategoriesService){}

allCategories:Categories[]=[];




  ngOnInit(): void {
    this._categoriesService.getCategories().subscribe({
      next:(res)=>{
        console.log(res);
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log();
        

      }

    })
  }
}
