import { Car } from "./car";

export interface CarDetails {
  id:number;
  carId: number;
  colorId:number,
  brandId:number,
  brandName: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  carImage:string;
  imagePath:string;
  findeks:number;
}
