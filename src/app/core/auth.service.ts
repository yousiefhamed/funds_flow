import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }




  Signup(info:any):Observable<any>{

    return this._httpClient.post(`https://8436-197-55-187-253.ngrok-free.app/api/register` , info)
    
    }
    


    Signin(info:object):Observable<any>{

      return this._httpClient.post(`https://8436-197-55-187-253.ngrok-free.app/api/login` , info)
      
      }
      






}
