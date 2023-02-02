import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, take } from 'rxjs';
import { SesionService } from '../services/firebase/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  constructor(private sesionUser: SesionService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.sesionUser.currentSessionStatus.pipe(
      take(1),
      map(sessionStatus => {
        if (sessionStatus) {
          return true;
        }
        alert('you dont have permissions, need login account');
        this.router.navigate(['/inicio']);
        return false;
      })
    );
  }

}
