import { UserData } from './../interface/user-data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNameUser',
  standalone: true
})
export class SearchNameUserPipe implements PipeTransform {

  transform(Users:UserData[], term:string): UserData[] {
      return   Users.filter((item)=>item.email.toLowerCase().includes(term.toLowerCase())) 
    }
}



