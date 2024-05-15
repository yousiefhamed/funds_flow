import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForminvestService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string=`https://working-cockatoo-singularly.ngrok-free.app/`;
  
  investForm(data: FormData): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/opportunity/create`, data);
  }  
  
  getForm(data: object): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/opportunity/create`, data);
  } 
  
  updateForm(data: FormData): Observable<any> {

    return this._httpClient.post(`${this.baseUrl}api/opportunity/create`, data);
  } 












      uploadFile(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
    
        return this._httpClient.post<any>('http://your-backend-url/upload.php', formData);
      }
      







      
}