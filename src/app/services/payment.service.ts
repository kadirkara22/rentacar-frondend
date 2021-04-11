import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
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
  getCardNumber(id:number):Observable<ListResponseModel<Payment>>{
    let newPath =this.apiUrl+"payments/getcardnumber?id="+id
    return this.httpClient.get<ListResponseModel<Payment>>(newPath)

  }
}
