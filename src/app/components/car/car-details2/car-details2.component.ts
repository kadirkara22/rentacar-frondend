import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/brand';
import { CarDetails } from 'src/app/Models/carDetails';
import { CarImage } from 'src/app/Models/carImage';
import { Color } from 'src/app/Models/color';
import { Rental } from 'src/app/Models/rental';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImageService';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-details2',
  templateUrl: './car-details2.component.html',
  styleUrls: ['./car-details2.component.css']
})
export class CarDetails2Component implements OnInit {
  gunFarki: number=0;
  car!: CarDetails;
  brand!: Brand;
  color!: Color;
  DateTimeNow: Date = new Date();
  rentStartDate: Date = this.DateTimeNow;
  rentEndDate: Date = this.DateTimeNow;
  cars: CarDetails[] = [];
  images: CarImage[] = [];
  ImagePaths: string[] = [];
  imageUrl = 'https://localhost:44304/';
  currentCar?: CarDetails;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private ImageService: CarImageService,
    private toastrService: ToastrService,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);

        this.getDiffBetweenDays();
      }

    });
  }

  setCurrentCar(car: CarDetails) {
    this.currentCar = car;
  }
  getCarsById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.cars = response.data;
      console.log(response);
    });
  }
  getCarDetail(carId: number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
      console.log(response);
    });
  }
  getImagesById(carId: number) {
    this.ImageService.getImagesById(carId).subscribe((response) => {
      this.images = response.data;
      console.log(response);
    });
  }
  rentCar(id: number) {
    let rental: Rental = {
      carId: id,
      customerId: 1003, // Test
      rentStartDate: new Date(this.rentStartDate),
      rentEndDate: new Date(this.rentEndDate),
      returnDate: undefined,
    };
    this.rentalService.add(rental).subscribe((response) => {
      this.toastrService.info('Ödeme Sayfasına Yönlendiriliyorsunuz');
    });
  }

  getDiffBetweenDays() {
    var date1 = new Date(this.rentStartDate.toString());
    var date2 = new Date(this.rentEndDate.toString());
    var difference = date2.getTime() - date1.getTime();
    var gunFarki = Math.ceil(difference / (1000 * 3600 * 24));
  }

}
