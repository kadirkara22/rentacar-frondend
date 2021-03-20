import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl='https://localhost:44304/api/customers/getcustomerdetails';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
       }
}
