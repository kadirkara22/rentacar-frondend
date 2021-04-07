import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../Models/payment';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = "https://localhost:44304/api/"
  constructor(private httpClient :HttpClient) { }

  add(payment:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"payments/add",payment)
  }
}
