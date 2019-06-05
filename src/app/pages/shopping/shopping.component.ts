import { Component, OnInit } from '@angular/core'
import { ShoppingService } from './shopping.service'
import { ProductsService } from '../products/products.service'
import { CategoryService } from '../category/category.service'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  /**
   * Lista de produtos
   */
  products = []

  /**
   * Lista de categorias
   */
  categories = []

  /**
   * Lista de itens do pedido
   */
  selectedItems = []

  /**
   * Valor total a pagar
   */
  totalPay = 0

  constructor(
    private service: ShoppingService,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.getCategories()

    this.getProducts()
  }

  /**
   * Carrega lista de produtos
   */
  private getProducts() {
    this.productsService.getAll().subscribe(r => (this.products = r))
  }

  /**
   * Carrega lista de produtos
   */
  private getCategories() {
    this.categoryService.getAll().subscribe(r => (this.categories = r))
  }

  /**
   * Seleciona produto
   */
  selectItem(item: any) {
    this.selectedItems.push(item)

    this.totalPay += item.preco
  }

  /**
   * Remove item do pedido
   */
  removeItem(index: number) {
    this.selectedItems = this.selectedItems.filter((p, i) => {
      if (i === index) this.totalPay -= p.preco

      return i !== index
    })
  }

  /**
   * Finaliza pedido
   */
  finishOrder() {
    const order = {
      valor_total: this.totalPay,
      cliente: 'admin',
      subcategoria_ids: this.selectedItems.map(p => p.id),
    }

    this.service.post(order).subscribe(() => {
      alert('Pedido realizado')

      this.totalPay = 0

      this.selectedItems = []
    })
  }
}
