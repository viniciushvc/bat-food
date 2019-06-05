import { Component, OnInit } from '@angular/core'

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-get',
  templateUrl: './products-get.component.html',
  styleUrls: [
    '../../../../assets/scss/form.scss',
    '../../../../assets/scss/table.scss',
  ],
})
export class ProductsGetComponent implements OnInit {
  /**
   * Lista de produtos
   */
  products = []

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
    this.service.getAll().subscribe(res => (this.products = res))
  }
}
