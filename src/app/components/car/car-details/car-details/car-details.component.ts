import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Models/car';
import { CarDetails } from 'src/app/Models/carDetails';
import { CarImage } from 'src/app/Models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImageService';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetail: CarDetails;
  carImage: CarImage[];
  dataLoaded = false;
  imageBasePath = environment.baseUrl;


  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }

  getCarDetail(carId: number) {
    this.carDetailService.getCarDetail(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      this.dataLoaded = true;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImage = response.data;
      this.dataLoaded = true;
    });
  }
}
