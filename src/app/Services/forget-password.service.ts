import { ForgetPasswordComponent } from '../pages/forget-password/forget-password.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForgetPasswordService {
  constructor(private _httpClient: HttpClient) {}

  baseUrl: string = 'https://malamute-optimum-recently.ngrok-free.app/';

  ForgetPassword(email: Object): Observable<any> {
    //6e03-102-44-160-132.ngrok-free.app/
    https: return this._httpClient.post(
      `${this.baseUrl}api/password/forgot-password`,
      email
    );
  }

  resetCodeSignUp(resetCode: Object): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/password/otpvalidation`,
      resetCode
    );
  } resetCode(resetCode: Object): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/email-verification`,
      resetCode
    );
  }

  resetPassword(resetPassword: Object): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/password/reset-password`,
      resetPassword
    );
  }
}
