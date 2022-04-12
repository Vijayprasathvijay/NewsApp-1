import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterdetailsService {
  baseurl="http://localhost:55908/reg/all"
  constructor(private httpClient:HttpClient) { }

  updateRegister(username:String, register :Register):Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/register/${username}`,register)
  }
}
