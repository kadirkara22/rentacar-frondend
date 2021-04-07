import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Models/car';
import { CarDetails } from '../Models/carDetails';
import { CarImage } from '../Models/carImage';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44304/api/';
  constructor(private httpClient:HttpClient) { }


  getCarDetails(carId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "/getcardetail?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsById(carId:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
}
