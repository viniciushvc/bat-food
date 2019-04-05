import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  getToken(): String {
    return window.localStorage['batFoodToken'];
  }

  saveToken(token: String) {
    window.localStorage['batFoodToken'] = token;
  }

  destroyToken() {
    window.localStorage['batFoodToken'] = '';
  }

}
