import { Component, OnInit } from '@angular/core'
import { ShoppingService } from './shopping.service'
import { ProductsService } from '../products/products.service'
import { CategoryService } from '../category/category.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  /**
   * Lista de produtos
   */
  products$: Observable<any>

  /**
   * Lista de categorias
   */
  categories$: Observable<any>

  /**
   * Lista de itens do pedido
   */
  selectedItems = []

  /**
   * Valor total a pagar
   */
  totalPrice: number = 0

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
    this.products$ = this.productsService.getAll()
  }

  /**
   * Carrega lista de produtos
   */
  private getCategories() {
    this.categories$ = this.categoryService.getAll()
  }

  /**
   * Seleciona produto
   */
  selectItem(item: any) {
    console.log(this.selectedItems)

    this.selectedItems.push(item)

    this.totalPrice += parseInt(item.price)
  }

  /**
   * Remove item do pedido
   */
  removeItem(index: number) {
    this.selectedItems = this.selectedItems.filter((p, i) => {
      if (i === index) this.totalPrice -= parseInt(p.price)

      return i !== index
    })
  }

  /**
   * Finaliza pedido
   */
  finishOrder() {
    const order = {
      totalPrice: this.totalPrice,
      user: 'admin',
      idCategory: this.selectedItems.map(p => p.id),
    }

    this.service.post(order).subscribe(() => {
      this.totalPrice = 0

      this.selectedItems = []
    })
  }
}
