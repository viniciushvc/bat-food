import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'products'

  constructor(private service: ApiService) {}

  /**
   * Carrega todos os produtos
   */
  getAll(): Observable<any> {
    return this.service.get(this.apiUrl).pipe(shareReplay())
  }

  /**
   * Carrega produto específico
   */
  get(id: string): Observable<any> {
    return this.service.get(`${this.apiUrl}/${id}`).pipe(take(1))
  }

  /**
   * Cria novo produto
   */
  post(data: object): Observable<any> {
    return this.service.post(this.apiUrl, data)
  }

  /**
   * Atualiza produto
   */
  put(data: any): Observable<any> {
    return this.service.put(this.apiUrl, data.id, data)
  }

  /**
   * Deleta produto
   */
  delete(id: number): Observable<any> {
    return this.service.delete(`${this.apiUrl}`, id)
  }
}
