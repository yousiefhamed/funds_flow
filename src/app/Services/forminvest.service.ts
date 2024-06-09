import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForminvestService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string=`https://malamute-optimum-recently.ngrok-free.app/`;
  
  investForm(data: FormData): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/opportunity/create`, data);
  }  
  
  getForm(data: object): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/opportunity/create`, data);
  } 
  
  updateForm(data: FormData , uuid:string|null|number): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}api/opportunity/update/${uuid}`,data);
  } 

  //   getDetails(id: string|null|number): Observable<any> {
  //   return this._HttpClient.post(`${this.baseUrl}api/investment-opportunity/details/${id}`, {});
  // }












      uploadFile(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
    
        return this._httpClient.post<any>('http://your-backend-url/upload.php', formData);
      }
      







      
}