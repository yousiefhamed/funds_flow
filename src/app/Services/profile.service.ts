import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string=`https://working-cockatoo-singularly.ngrok-free.app/`;

  getData(data:any): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/profile` ,data);
  }
  
  update(data:FormData): Observable<any> {

    // console.log(data2);
    
    return this._httpClient.post(`${this.baseUrl}api/update-profile`,data );
  }

    
  getpay(data: any): Observable<any> {
  
    return this._httpClient.post(`http://working-cockatoo-singularly.ngrok-free.app/api/payment?successUrl=http://localhost:4200/order`, data);
  }


}
