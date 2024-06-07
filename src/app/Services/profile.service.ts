import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string=`
  https://malamute-optimum-recently.ngrok-free.app/`;

  getData(data:any): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/profile` ,data);
  }
  
  update(data:FormData): Observable<any> {

    // console.log(data2);
    
    return this._httpClient.post(`${this.baseUrl}api/update-profile`,data );
  }

    

 
  // getCom(data: any): Observable<any> {
  
  //   return this._httpClient.post(`http://working-cockatoo-singularly.ngrok-free.app/api/update-admin-profile/`, data);
  // }

  
  updatecom(data: any , uuid:string|null|number): Observable<any> {
    console.log(data);
    console.log(uuid);
    
      
        return this._httpClient.post(`${this.baseUrl}api/update-admin-profile/${uuid}`,data);
      } 

      getUnapproved(data: any): Observable<any> {
                                   
        return this._httpClient.post( `${this.baseUrl}api/unApproved-opportunities`, data);
      }
      delete(data: any ,uuid:string|null|number ): Observable<any> {
       
        return this._httpClient.post(`${this.baseUrl}api/disApprove-opportunity/${uuid}`, data);
      } 
      
      accept(data: any ,uuid:string|null|number ): Observable<any> {
        return this._httpClient.post(`${ this.baseUrl}api/approve-opportunity/${uuid}`, data);
      }




      getUserName(method:object):Observable<any>{

        return this._httpClient.post(`https://malamute-optimum-recently.ngrok-free.app/api/get-users`,method);
 
      } 
      
      
      getUserData(id:any):Observable<any>{
          return this._httpClient.post(`https://malamute-optimum-recently.ngrok-free.app/api/user-details/${id}`,{});
 
      }       
      
      approved(id:any):Observable<any>{

          return this._httpClient.post(`https://malamute-optimum-recently.ngrok-free.app/api/user-approve-investing/${id}`,{});
 
      }
      
      
      disapproved(id:any):Observable<any>{

          return this._httpClient.post(`https://malamute-optimum-recently.ngrok-free.app/api/user-disApprove-investing/${id}`,{});
 
      }




}
