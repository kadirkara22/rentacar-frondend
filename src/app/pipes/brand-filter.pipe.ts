import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../Models/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterText:string): Brand[] {
    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
//map,filter
