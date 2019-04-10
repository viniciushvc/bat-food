import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [
    {
      name: 'Pizza Pan',
      category: 'Pizzaria',
      price: 5,
      time: 30,
    },
    {
      name: 'Pizza Hut',
      category: 'Pizzaria',
      price: 3,
      time: 40,
    },
    {
      name: "Pizza Domino's",
      category: 'Pizzaria',
      price: 2,
      time: 50,
    },
    {
      name: 'Pizza Fan',
      category: 'Pizzaria',
      price: 10,
      time: 10,
    },
  ]

  constructor() {}

  ngOnInit() {}
}
