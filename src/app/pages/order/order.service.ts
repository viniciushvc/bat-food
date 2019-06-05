import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private service: ApiService) {}

  /**
   * Carrega todos os pedidos
   */
  getAll(): Observable<any> {
    return this.service.get('pedido').pipe(shareReplay())
  }

  /**
   * Carrega pedido específico
   */
  get(id: string): Observable<any> {
    return this.service.get(`pedido/${id}`)
  }

  /**
   * Cria novo pedido
   */
  post(data: object): Observable<any> {
    return this.service.post('pedido', data)
  }

  /**
   * Atualiza pedido
   */
  put(data: object): Observable<any> {
    return this.service.put('pedido', data)
  }
}
