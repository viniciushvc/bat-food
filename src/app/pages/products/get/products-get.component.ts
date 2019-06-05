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
  categories = []

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(res => (this.categories = res))
  }
}
