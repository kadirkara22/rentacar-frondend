export interface Rental{
  id?:number,
  carId:number,
  customerId: number,
  returnDate?:Date,
  rentStartDate:Date,
  rentEndDate:Date,
}
