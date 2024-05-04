import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }


baseUrl:string=`https://working-cockatoo-singularly.ngrok-free.app/`;

  Signup(info:any):Observable<any>{

    return this._httpClient.post(`${this.baseUrl}api/register
    ` , info)
    
    }
    


    Signin(info:object):Observable<any>{

      return this._httpClient.post(`${this.baseUrl}api/login` , info)
      
      }
      






}
