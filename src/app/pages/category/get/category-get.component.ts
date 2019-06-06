import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: ['../../../../assets/scss/table.scss'],
})
export class CategoryGetComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories$: Observable<any>

  constructor(private service: CategoryService) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
  }

  /**
   * Carrega lista de categorias
   */
  private get() {
    this.categories$ = this.service.getAll()
  }

  /**
   * Remove categoria
   * @param id Código do registro
   */
  delete(id: number) {
    if (confirm('Deseja remover este registro?'))
      this.service.delete(id).subscribe(() => this.get())
  }
}
