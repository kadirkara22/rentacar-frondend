import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDetailsComponent } from './components/car/car-details/car-details/car-details.component';
import { CarDetails2Component } from './components/car/car-details2/car-details2.component';


import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';

import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"customers",component:CustomerComponent},
  {path:"cars/details/:carId", component: CarDetailsComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/cardetails",component:CarDetailsComponent},
  {path:"cars/car/:carId",component:CarDetailsComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/car/:carId",component:CarDetailsComponent},
  {path:"cars/cardetails2",component:CarDetails2Component},
  {path:"cars/cardetails2/:carId",component:CarDetails2Component},
  {path:"rentals",component:RentalComponent},
  {path:"cars/rental",component:PaymentComponent},
  {path:"cars/brandadd",component:BrandAddComponent},
  {path:"cars/coloradd",component:ColorAddComponent},
  {path:"cars/caradd",component:CarAddComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
