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
  products = [
    {
      id: 1,
      categoria_id: 2,
      imagem:
        'https://www.receiteria.com.br/wp-content/uploads/receitas-de-coracao-de-galinha-3.jpg',
      preco: 20,
      descricao: 'Coração de Frango',
      nome: 'Coração kg',
    },
    {
      id: 2,
      categoria_id: 1,
      imagem:
        'https://res-2.cloudinary.com/gaveteiro/image/upload/c_pad,h_283,w_283/v1439315065/urfcx04zx7myn4mjpalk.jpg',
      preco: 20,
      descricao: 'Coca-Coca',
      nome: 'Coca-Coca Lata',
    },
    {
      id: 1,
      categoria_id: 2,
      imagem:
        'https://www.receiteria.com.br/wp-content/uploads/receitas-de-coracao-de-galinha-3.jpg',
      preco: 20,
      descricao: 'Coração de Frango',
      nome: 'Coração kg',
    },
    {
      id: 2,
      categoria_id: 1,
      imagem:
        'https://res-2.cloudinary.com/gaveteiro/image/upload/c_pad,h_283,w_283/v1439315065/urfcx04zx7myn4mjpalk.jpg',
      preco: 20,
      descricao: 'Coca-Coca',
      nome: 'Coca-Coca Lata',
    },
  ]

  /**
   * Lista de categorias
   */
  categories = [
    {
      id: 1,
      descricao: 'Bebida',
      nome: 'Bebida',
    },
    {
      id: 2,
      descricao: 'Comida',
      nome: 'Comida',
    },
  ]

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

    this.service.post(order).subscribe(() => alert('Pedido realizado'))
  }
}
