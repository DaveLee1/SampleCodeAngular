import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthGuardGuard implements CanActivate {
  /**
   *
   */
  constructor(private router : Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem("jwt") != null)
      {
        return true;
      }
      this.router.navigate(['/Login']);
      return false;
  }
  
}
