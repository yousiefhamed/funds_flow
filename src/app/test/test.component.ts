import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../Services/profile.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule ,   RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit{
data:{}={

  name:"phone",
  amount:551555
}



  constructor(private _ProfileService:ProfileService){}


 payForm: FormGroup= new FormGroup({
    name: new FormControl('', []),
    amount: new FormControl('', [
    ]),
  });






  handelForm() {
   console.log(this.payForm.value);
   

     this._ProfileService.getpay(this.payForm.value).subscribe({
        next: (res) => {
         console.log(res);
         
          if(res.status==true){

            window.open(res.data.url ,'_self')

            
          }
        },
        error: (err) => {

          console.log();
          
        },
      });
    }



    ngOnInit(): void {
      

      this.handelForm()
    }
  }


