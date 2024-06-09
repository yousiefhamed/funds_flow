import { ProfileService } from 'src/app/Services/profile.service';
import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bussiness-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bussiness-profile.component.html',
  styleUrls: ['./bussiness-profile.component.scss'],
})
export class BussinessProfileComponent implements OnInit {
  bussinessId: any;
  data: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProfileService: ProfileService,
    private _ToastrService: ToastrService,
    private _Renderer2:Renderer2
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parmes) => {
        this.bussinessId = parmes.get('id');
      },
    });

    this.getData();
  }

  getData() {
    this._ProfileService.getUserData(this.bussinessId).subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.data;
        // this.photo = res.data.photo;
        // this.name = res.data.name;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  approve(id: any , element:HTMLButtonElement) {

    this._Renderer2.setAttribute(element ,'disabled' ,'true')
        this._ProfileService.approved(id).subscribe({
          next: (res) => {
            console.log(res);
            this._ToastrService.success(res.message)
            this._Renderer2.removeAttribute(element ,'disabled')
    
          },
          error: (err) => {
            console.log(err);
            this._Renderer2.removeAttribute(element ,'disabled' )
    
          },
        });
      }
    
      disapprove(id: any ,element:HTMLButtonElement) {
        this._Renderer2.setAttribute(element ,'disabled' ,'true')
    
        this._ProfileService.disapproved(id).subscribe({
          next: (res) => {
            this._Renderer2.removeAttribute(element ,'disabled')
    
            console.log(res);
            this._ToastrService.success(res.message)
    
          },
          error: (err) => {
    
            this._Renderer2.removeAttribute(element ,'disabled')
    
            console.log(err);
          },
        });
      }
    }
