import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Products } from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  get(id: number): Observable<Products> {
    return this.apiService.get(`products/${id}`);
  }
}
