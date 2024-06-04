import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Services/profile.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule ,FormsModule , ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

userID!:string|null|number;
user:any
photo:string=''
name:string=''
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProfileService:ProfileService){}

  investorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    about: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    email: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    national_id: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    phone: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    nationality: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    gender: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),

    // photo: new FormControl('', [
    //     // Validators.required,
    //     // Validators.minLength(3),
    //     // Validators.maxLength(15),
    //   ]),

    age: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  });


getData(){


  this._ProfileService.getUserData(this.userID).subscribe({

    next:(res)=>{
    console.log(res);
    this.user=res.data
    this.photo=res.data.photo
    this.name=res.data.name
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}



approved(id:any){

this._ProfileService.approved(id).subscribe({
  next:(res)=>{
    console.log(res);
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})



}

disapproved(id:any){

  this._ProfileService.disapproved(id).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}








  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({

      next:(params)=>{
  
        this.userID=  params.get('id')
      }
    })

    this.
    getData()
  }


  
}
