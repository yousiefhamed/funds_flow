import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private _httpClient: HttpClient) {}

  baseUrl: string = `
 https://malamute-optimum-recently.ngrok-free.app/`;

 getData(data: any): Observable<any> {
  return this._httpClient.post(`${this.baseUrl}api/profile`, data);
}  
getData1(data: any): Observable<any> {
  return this._httpClient.post(`${this.baseUrl}api/user`, data);
}

  update(data: FormData): Observable<any> {
    // console.log(data2);

    return this._httpClient.post(`${this.baseUrl}api/update-profile`, data);
  }

  // getCom(data: any): Observable<any> {

  //   return this._httpClient.post(`http://working-cockatoo-singularly.ngrok-free.app/api/update-admin-profile/`, data);
  // }

  updatecom(data: any): Observable<any> {
    console.log(data);

    return this._httpClient.post(
      `${this.baseUrl}api/update-admin-profile`,
      data
    );
  }

  getUnapproved(data: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/unApproved-opportunities`,
      data
    );
  }
  delete(data: any, uuid: string | null | number): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/disApprove-opportunity/${uuid}`,
      data
    );
  }

  accept(data: any, uuid: string | null | number): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/approve-opportunity/${uuid}`,
      data
    );
  }

  getUserName(method: object): Observable<any> {
    https://malamute-optimum-recently.ngrok-free.app/api/get-users
    return this._httpClient.post(
      `${this.baseUrl}api/users/investors`,
      method
    );
  }
  getBussiness(method: object): Observable<any> {

    return this._httpClient.post(
      `${this.baseUrl}api/users/businesses`,
      method
    );
  }

  getUserData(id: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/user-details/${id}`,
      {}
    );
  }  




  approved(id: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/user-approve-investing/${id}`,
      {}
    );
  }

  disapproved(id: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}api/user-disApprove-investing/${id}`,
      {}
    );
  }
}
