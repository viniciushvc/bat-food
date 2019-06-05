import { Component, OnInit } from '@angular/core'
import { OrderService } from '../order.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-order-get',
  templateUrl: './order.component.html',
  styleUrls: ['../../../../assets/scss/table.scss'],
})
export class OrderGetComponent implements OnInit {
  /**
   * Lista de pedidos
   */
  orders$: Observable<any>

  constructor(private service: OrderService) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
  }

  /**
   * Carrega lista de pedidos
   */
  private get() {
    this.orders$ = this.service.getAll()
  }
}
