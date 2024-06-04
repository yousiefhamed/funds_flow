import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from '../Services/categories.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

constructor(private _ActivatedRoute:ActivatedRoute , private _categoriesService:CategoriesService){}
uuid:any;
data:any;
transaction:any;

  ngOnInit(): void {
  
    this._ActivatedRoute.paramMap.subscribe({
  
      next:(params)=>{
  
        this.uuid=  params.get('session_id')
  
      }
    })
  
  
  
  console.log( "uuid  "+ this.uuid);
  this. getData()
  }

  getData(){

    
  this._categoriesService.getDataPayment(this.uuid).subscribe({
    next:(res)=>{
      console.log( res);
  this.data=res.investmentOpportunity
  this.transaction=res.transaction
    },
    error:(err)=>{
      console.log(err);
      

    }

  })
  }
  
  
}

