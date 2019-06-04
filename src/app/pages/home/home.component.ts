import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = []

  selectedItems = []

  totalPay = 0

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.getData()

    console.log(this.list)
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
