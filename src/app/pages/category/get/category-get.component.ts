import { Component, OnInit } from '@angular/core'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: [
    '../../../../assets/scss/form.scss',
    '../../../../assets/scss/table.scss',
  ],
})
export class CategoryGetComponent implements OnInit {
  categories = []

  constructor(private service: CategoryService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.service.getData().subscribe(res => (this.categories = res))
  }
}
