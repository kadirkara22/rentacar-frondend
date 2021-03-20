import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Models/car';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44304/api/';
  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
