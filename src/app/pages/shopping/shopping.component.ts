import { Component, OnInit } from '@angular/core'
import { ShoppingService } from './shopping.service'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  list = []

  selectedItems = []

  totalPay = 0

  constructor(private service: ShoppingService) {}

  ngOnInit() {
    // this.getData()
  }

  getData() {
    this.service.getData().subscribe(r => (this.list = r))
  }

  selectItem(item: any) {
    this.selectedItems.push(item)

    this.totalPay += item.price
  }

  removeItem(index: number) {
    this.selectedItems = this.selectedItems.filter((p, i) => {
      if (i === index) this.totalPay -= p.price

      return i !== index
    })
  }

  finishOrder() {
    alert('Venda finalizada com sucesso')

    this.selectedItems = []

    this.totalPay = 0
  }
}
