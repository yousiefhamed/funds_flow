import { Pipe, PipeTransform } from '@angular/core';
import { Opportunites } from '../interface/opportunites';

@Pipe({
  name: 'searchOppo',
  standalone: true
})
export class SearchOppoPipe implements PipeTransform {

  transform(opportunites:Opportunites[] ,term:string): Opportunites[] {
    return   opportunites.filter((item)=>item.business_name.toLowerCase().includes(term.toLowerCase()));

}

}
