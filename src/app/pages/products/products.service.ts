import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private service: ApiService) {}

  /**
   * Carrega todos os produtos
   */
  getAll(): Observable<any> {
    return this.service.get('produto')
  }

  /**
   * Carrega produto específico
   */
  get(id: string): Observable<any> {
    return this.service.get(`produto/${id}`)
  }

  /**
   * Cria novo produto
   */
  post(data: object): Observable<any> {
    return this.service.post('produto', data)
  }

  /**
   * Atualiza produto
   */
  put(data: object): Observable<any> {
    return this.service.put('produto', data)
  }
}
