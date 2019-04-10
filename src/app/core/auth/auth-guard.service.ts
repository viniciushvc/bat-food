import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router'
import { Observable, ReplaySubject } from 'rxjs'
import { TokenService } from './token.service'

@Injectable()
export class AuthGuard implements CanActivate {
  public isAuthenticated: boolean

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.isAuthenticated = this.tokenService.getToken().length > 0

    return this.isAuthenticated
  }

  logOut() {
    this.tokenService.destroyToken()

    this.isAuthenticated = false

    this.router.navigateByUrl('/')
  }
}
