import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../Models/car';
import { CarDetails } from '../Models/carDetails';
import { Color } from '../Models/color';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.
    filter((c:Car)=>`${c.brandName} ${c.colorName} ${c.description} ${c.modelYear} ${c.dailyPrice}`
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
