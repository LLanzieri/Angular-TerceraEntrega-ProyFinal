import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthState } from '../../autenticacion/state/auth.reducer';
import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/interfaces/sesion';
import { Store } from '@ngrx/store';
import { selectSesion } from '../../autenticacion/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authStore: Store<AuthState>,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authStore.select(selectSesion).pipe(
      map((sesion: Sesion) => {

        if (sesion.sesionActiva)
          return true;
        else {

          this.router.navigate(['auth/login']);

          return false;
        }
      })
    );

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authStore.select(selectSesion).pipe(
      map((sesion: Sesion) => {

        if (sesion.sesionActiva)
          return true;
        else {

          this.router.navigate(['auth/login']);

          return false;
        }
      })
    );

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authStore.select(selectSesion).pipe(
      map((sesion: Sesion) => {

        if (sesion.sesionActiva)
          return true;
        else {

          this.router.navigate(['auth/login']);

          return false;
        }
      })
    );

  }
}
