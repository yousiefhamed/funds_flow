import { ProfileService } from './../../Services/profile.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AboutInvestorComponent } from '../dialog-user/about-investor/about-investor.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [ CommonModule,MatButtonModule, MatDialogModule ,FormsModule,ReactiveFormsModule ,RouterLink],
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit{

  constructor(public dialog: MatDialog , private _profileService:ProfileService , private _httpClient:HttpClient , private _Router:Router)  {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutInvestorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

_method:object={ _method:'get'};
_method2:object={ _method:'put'};
data:any;
photo: string | undefined;
photoB:string='';
opportunites:any
file!: any;
formData = new FormData();
isLoading:boolean=false;
roleInvestor:string='';
roleBuss:string='';

  investorForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
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
  
  
  
  
  
  
  
  })
   
  
businessForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    about: new FormControl('', [
      // Validators.required,
    ]),
  
  
    email: new FormControl('Egyotian_Steel@gmail.com', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  
  
    Tax_card_number: new FormControl('', [
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
  
  
   
current_address: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(15),
    ]),
  
  // photo: new FormControl('', [
  //     // Validators.required,
  //     // Validators.minLength(3),
  //     // Validators.maxLength(15),
  //   ]),
  
  
   
  
  
  
  
  
  })
   

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file= file

    
     this.formData.append('photo', file);
      

     this._httpClient.post(`https://working-cockatoo-singularly.ngrok-free.app/api/update-profile` , this.formData).subscribe({

     next:(res)=>{

      console.log(res);
      this._Router.navigate(['/about-user'])
     },
     error:(err)=>{
      console.log(err);

      
     }
     })   
 
  }


  getData(){
    this._profileService.getData(this._method).subscribe({
      next:(res)=>{
        console.log(res)

        this.data=res.data       

        if(res.role == 'investor'){
         
          this.roleInvestor=res.role;
          this.photo=res.photo

       
        }else if (res.role == 'business') {
          this.roleBuss=res.role;
          this.photo=res.photo
        } else {
          console.log(" not found");
          
        }
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  

  update(){
  
    const formData1 = new FormData();
    formData1.append('name',this.investorForm.get('name')?.value)
    formData1.append('age',this.investorForm.get('age')?.value)
    formData1.append('gender',this.investorForm.get('gender')?.value)
    formData1.append('nationality',this.investorForm.get('nationality')?.value)
    formData1.append('phone',this.investorForm.get('phone')?.value)
    formData1.append('national_id',this.investorForm.get('national_id')?.value)
    formData1.append('email',this.investorForm.get('email')?.value)
    formData1.append('about',this.investorForm.get('about')?.value)
    // formData1.append('photo',this.file)
    // console.log(this.investorForm.value);
    // console.log(this.file);
    //  console.log(formData1);
     this.isLoading=true

    this._profileService.update(formData1 ).subscribe({

      next:(res)=>{
        this.isLoading=false
        this._Router.navigate(['/about-user'])
        console.log(res);
      },
      error:(err)=>{
        this.isLoading=false
        console.log(err)
      }
    })
  }
  
    











ngOnInit(): void {

  this.getData()

  this.update()
}










    handelForm(){

  //   let name = this.lo.value;
  //  this.channame= 'ahmed Mahmoud'
    // this.name=name.name
    // this.des=name.about;

    // this.name2= this.lo.value.name
    // this.des= this.lo.value.about

console.log(this.investorForm.value);

    }

}
