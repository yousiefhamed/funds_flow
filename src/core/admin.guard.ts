import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
const _Router = inject(Router)

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('role') == 'Admain'){
    return true;
  }else{

    _Router.navigate(['/signIn'])
    return false
  }
 
};

