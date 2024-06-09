import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [CommonModule ,FormsModule, ReactiveFormsModule],
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
  opportunitiesId!:string|null|number;
  opportunities:any
constructor(private _activatedRoute:ActivatedRoute , private _categoriesService:CategoriesService ,private  _profileService:ProfileService){}


commissionForm: FormGroup = new FormGroup({
  commission_amount: new FormControl('', [Validators.required]),
});





update(){
console.log(this.commissionForm.value);
let commData=this.commissionForm.value
commData.uuid=this.opportunitiesId;
this._profileService.updatecom(commData).subscribe({
  next: (res) => {
    console.log(res);
  },
  error: (err) => {
    console.log(err);
  },
});
}















getInvest(){
  
  
  this._categoriesService.getDetails(this.opportunitiesId).subscribe({
    next: (res) => {
      console.log(res);
      this.opportunities=res.data
      // console.log(this.investUpdate);
    },
    error: (err) => {
      console.log(err);
    },
  });
}











  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.opportunitiesId = params.get('uuid');
      },
    });
  this.getInvest()

  }


}
