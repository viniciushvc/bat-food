import { Component, OnInit } from '@angular/core'
import { ShoppingService } from './shopping.service'

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
   * Lista de itens do pedido
   */
  selectedItems = []

  /**
   * Valor total a pagar
   */
  totalPay = 0

  constructor(private service: ShoppingService) {}

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
    this.service.getData().subscribe(r => (this.products = r))
  }

  /**
   * Seleciona produto
   */
  selectItem(item: any) {
    this.selectedItems.push(item)

    this.totalPay += item.price
  }

  /**
   * Remove item do pedido
   */
  removeItem(index: number) {
    this.selectedItems = this.selectedItems.filter((p, i) => {
      if (i === index) this.totalPay -= p.price

      return i !== index
    })
  }

  /**
   * Finaliza pedido
   */
  finishOrder() {
    console.log('Venda finalizada com sucesso')

    this.selectedItems = []

    this.totalPay = 0
  }
}
