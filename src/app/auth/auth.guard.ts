import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
    debugger;
    const token = localStorage.getItem("token") || "";
    const router = inject(Router);

    if(token != ""){
        return true;

    }else {
        router.navigate(['login'])
        return false;
    }
 
};
