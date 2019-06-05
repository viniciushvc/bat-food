import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private service: ApiService) {}

  getAll(): Observable<any> {
    return this.service.get('categoria')
  }

  get(id: string): Observable<any> {
    return this.service.get(`categoria/${id}`)
  }

  post(data: object): Observable<any> {
    return this.service.post('categoria', data)
  }
}
