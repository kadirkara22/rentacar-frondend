import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../Models/carImage';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpClient: HttpClient) {}

  getAll() :Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);

  }


  getImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getimagesbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)

}
}
