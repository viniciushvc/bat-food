import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private service: ApiService) {}

  getData(): Observable<any> {
    return this.service.get('categoria')
  }
}
