import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'orders'

  constructor(private service: ApiService) {}

  /**
   * Carrega todos os pedidos
   */
  getAll(): Observable<any> {
    return this.service.get(this.apiUrl).pipe(shareReplay())
  }

  /**
   * Carrega pedido específico
   */
  get(id: string): Observable<any> {
    return this.service.get(`${this.apiUrl}/${id}`)
  }

  /**
   * Atualiza pedido
   */
  put(data: any): Observable<any> {
    return this.service.put(this.apiUrl, data.id, data)
  }
}
