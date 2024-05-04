import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '../interface/categories';

@Pipe({
  name: 'searchh',
  standalone: true
})
export class SearchhPipe implements PipeTransform {

  transform(categories:Categories[] ,term:string): Categories[] {
    return   categories.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()));

}
}