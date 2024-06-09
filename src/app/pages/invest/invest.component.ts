import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'primeng/fileupload';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ForminvestService } from 'src/app/Services/forminvest.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}



@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,

    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
    FileUploadModule
  ],

  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  providers: [MessageService]
})
export class InvestComponent  implements OnInit{
  constructor(
    private _ForminvestService: ForminvestService,
    private _http: HttpClient ,
    private messageService: MessageService,
    private _router:Router,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2
  ) {}

  term: string = '';
  file!: any;
   formData = new FormData();
   isLoading: boolean = false;
   investUpdate:any;
  _method:{}={

   _method:'put'
  }





  investForm: FormGroup = new FormGroup({
    category_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    business_name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    amount_needed: new FormControl('', [Validators.required]),
    // remaining_amount: new FormControl('',[Validators.required]),
    potential_risks: new FormControl('', [Validators.required]),
    future_growth: new FormControl('', [Validators.required]),
    products_or_services: new FormControl('', [Validators.required]),
    returns_percentage: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(100),
    ]),
    company_valuation: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    revenues: new FormControl('', [Validators.required]),
    net_profit: new FormControl('', [Validators.required]),
    profit_margin: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(100),
    ]),
    cash_flow: new FormControl('', [Validators.required]),
    ROI: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
  });




  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if(file){
      this.file= file
     this.formData.append('photo', file);
        }
 
  }


  handelForm() {
    this.isLoading = true;

const formData1 = new FormData();
formData1.append('category_name',this.investForm.get('category_name')?.value)
formData1.append('business_name',this.investForm.get('business_name')?.value)
formData1.append('description',this.investForm.get('description')?.value)
formData1.append('amount_needed',this.investForm.get('amount_needed')?.value)
formData1.append('potential_risks',this.investForm.get('potential_risks')?.value)
formData1.append('future_growth',this.investForm.get('future_growth')?.value)
formData1.append('products_or_services',this.investForm.get('products_or_services')?.value)
formData1.append('returns_percentage',this.investForm.get('returns_percentage')?.value)
formData1.append('company_valuation',this.investForm.get('company_valuation')?.value)
formData1.append('start_date',this.investForm.get('start_date')?.value)
formData1.append('end_date',this.investForm.get('end_date')?.value)
formData1.append('revenues',this.investForm.get('revenues')?.value)
formData1.append('net_profit',this.investForm.get('net_profit')?.value)
formData1.append('cash_flow',this.investForm.get('cash_flow')?.value)
formData1.append('profit_margin',this.investForm.get('profit_margin')?.value)
formData1.append('ROI',this.investForm.get('ROI')?.value)
formData1.append('photo',this.file)
console.log(this.file);
console.log(formData1);
console.log(this.investForm.value);

let formData = this.investForm.value;

formData.photo=this.file


  this._ForminvestService.investForm(formData1).subscribe({
    next: (res) => {
      console.log(res);
      this.isLoading = false;
      this._ToastrService.success(res.message)

    },
    error: (err) => {
      console.log(err);
      this.isLoading = false;

    },
  });



  }

getInvest(){


  this._ForminvestService.getForm(this._method).subscribe({
    next: (res) => {
      console.log(res);
      this.isLoading = false;
       this.investUpdate=res
      
    },
    error: (err) => {
      console.log(err);
      this.isLoading = false;

    },
  });



}







ngOnInit(): void {
  this.getInvest()
}

}
