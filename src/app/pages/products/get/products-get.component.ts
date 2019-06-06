import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-get',
  templateUrl: './products-get.component.html',
  styleUrls: ['../../../../assets/scss/table.scss'],
})
export class ProductsGetComponent implements OnInit {
  /**
   * Lista de produtos
   */
  products$: Observable<any>

  constructor(private service: ProductsService) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
  }

  /**
   * Carrega lista de produtos
   */
  private get() {
    this.products$ = this.service.getAll()
  }

  /**
   * Remove produto
   * @param id Código do registro
   */
  delete(id: number) {
    if (confirm('Deseja remover este registro?'))
      this.service.delete(id).subscribe(() => this.get())
  }
}
