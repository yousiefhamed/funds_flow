import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private _HttpClient:HttpClient) { }
   myToken:any = localStorage.getItem('userToken')

  baseUrl:string=`https://working-cockatoo-singularly.ngrok-free.app/`;
getCategories(_method:object):Observable<any>{
return this._HttpClient.post(this.baseUrl+`api/categories`,_method )
}

// getOpportunities(id:any):Observable<any>{
//   return this._HttpClient.post(this.baseUrl+`api/investment-opportunity/`,id )
//   }
  getOpportunities(id: string|null|number): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}api/investment-opportunity/${id}`, {} ,

{
  headers:this.myToken
}
    );
  }
  getDetails(id: string|null|number): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}api/investment-opportunity/details/${id}`, {});
  }





}


