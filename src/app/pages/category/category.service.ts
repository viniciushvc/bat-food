import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'categories'

  constructor(private service: ApiService) {}

  /**
   * Carrega todos as categorias
   */
  getAll(): Observable<any> {
    return this.service.get(this.apiUrl).pipe(shareReplay())
  }

  /**
   * Carrega categoria específica
   */
  get(id: string): Observable<any> {
    return this.service.get(`${this.apiUrl}/${id}`).pipe(take(1))
  }

  /**
   * Cria nova categoria
   */
  post(data: any): Observable<any> {
    return this.service.post(this.apiUrl, data)
  }

  /**
   * Atualiza categoria
   */
  put(data: any): Observable<any> {
    return this.service.put(this.apiUrl, data.id, data)
  }

  /**
   * Deleta categoria
   */
  delete(id: number): Observable<any> {
    return this.service.delete(`${this.apiUrl}`, id)
  }
}
