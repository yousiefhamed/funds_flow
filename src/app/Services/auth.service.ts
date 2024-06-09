import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string=`https://malamute-optimum-recently.ngrok-free.app/`;
  // baseUrl:string=`https://fundsflow2.great-site.net/`;
// http://fundsflow2.great-site.net/
  Signup(info:FormData):Observable<any>{

    return this._httpClient.post(`${this.baseUrl}api/register
    ` , info)
    
    }
    


    Signin(info:object):Observable<any>{

      return this._httpClient.post(`${this.baseUrl}api/login` , info)
      
      }
      






}
