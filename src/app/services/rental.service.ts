import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Rental } from '../Models/rental';
import { RentalsDto } from '../Models/rentalsDto';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpClient:HttpClient) { }


  getRentals() :Observable<ListResponseModel<RentalsDto>>{

    let newPath =this.apiUrl+"rentals/getrentaldetail"
    return this.httpClient.get<ListResponseModel<RentalsDto>>(newPath);

  }

  add(rental: Rental): Observable<ResponseModel> {
    let newPath =this.apiUrl+"rentals/add"
    return this.httpClient.post<ResponseModel>(newPath,rental);
}
}

