import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private _HttpClient:HttpClient) { }
   myToken:any = localStorage.getItem('userToken')

  baseUrl:string=`
  https://malamute-optimum-recently.ngrok-free.app/`;
getCategories(_method:object):Observable<any>{
return this._HttpClient.post(this.baseUrl+`api/categories`,_method )
}

  getOpportunities(id: string|null|number): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}api/investment-opportunity/${id}`, {} ,

{
  headers:this.myToken
}
    );
  }
  getDetails(id: string|null|number): Observable<any> {
    console.log(id);
    
    return this._HttpClient.post(`${this.baseUrl}api/investment-opportunity/details/${id}`, {});
  }


  delete(uuid: string ): Observable<any> {
    const url = `${this.baseUrl}api/opportunity/delete/${uuid}` 
    return this._HttpClient.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  

  getpay(data: any): Observable<any> {
  
    return this._HttpClient.post(`${this.baseUrl}api/payment?successUrl=http://localhost:4200/order&cancelUrl=http://localhost:4200/cancel`, data);
  }


  getDataPayment(data: any): Observable<any> {
    console.log(data);
    
    return this._HttpClient.post(`${this.baseUrl}api/stripe/session-details/${data}`,{})
   
  }
  // return this._HttpClient.post(`https://malamute-optimum-recently.ngrok-free.app/api/payment/7026f5ee-1478-11ef-9b50-b44506862942?successUrl=http://localhost:4200/order&cancelUrl=http://localhost:4200/cancel${data}`,{});

}


