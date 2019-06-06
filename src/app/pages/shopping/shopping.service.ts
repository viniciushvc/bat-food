import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private service: ApiService) {}

  post(data: object): Observable<any> {
    return this.service.post('orders', data)
  }
}
