import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/core/forget-password.service';
import { Router } from '@angular/router';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule ,FormsModule ,ReactiveFormsModule , RxReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  displayMassage:string=''
  errorMassage:string=''
constructor(private _forgetPasswordService:ForgetPasswordService ,private _router:Router){}

forgetForm: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.email]),

})
resetCodeForm: FormGroup = new FormGroup({
  resetCode: new FormControl(null, [
  Validators.required,
  Validators.pattern(/^\w{4,}$/),
]),
})
resetPasswordForm: FormGroup = new FormGroup({
  newPassword: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^\w{3,}$/),

  ]),


  conFirmPassword: new FormControl(null, [
    Validators.required,
    RxwebValidators.compare({fieldName:'newPassword' })

  ])
})















forgetPassword(){

  this.step1=false;
  this.step2=true;

    }

    resetCode(){

      this.step2=false;
      this.step3=true;
    
        }
        resetPassword(){

          this._router.navigate(['/home'])
        }












        backLogin(){
         
       this._router.navigate(['/signIn'])
        }
        
        backEnterEmail(){
          this.step1=true;
          this.step2=false;
       
        }
        
        backResetCode(){
          this.step2=true;
          this.step3=false;
       
        }









}
