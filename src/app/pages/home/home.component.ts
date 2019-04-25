import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'Lanches de hambúrguer',
      items: [
        {
          id: 1,
          name: 'Fritas',
          description: 'asd',
          image:
            'https://images.unsplash.com/photo-1530805948738-95aa20739233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          price: 18,
        },
        {
          id: 2,
          name: 'Burguer',
          description: 'asd',
          image:
            'https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          price: 10,
        },
        {
          id: 3,
          name: 'Coca-cola',
          description: 'asd',
          image:
            'https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
          price: 5,
        },
      ],
    },
  ]

  selectedItems = []

  totalPay = 0

  constructor() {}

  ngOnInit() {}

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
