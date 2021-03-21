import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Models/car';
import { CarDetails } from '../Models/carDetails';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetail?id='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }


  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarFiltered(brandId:number,colorId:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getbybrandandcolor?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
}
