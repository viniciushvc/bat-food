import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

import { ProductsService } from '../products.service'
import { CategoryService } from '../../category/category.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsCreateComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories = []

  /**
   * Formulário de cadastro
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private category: CategoryService,
    private router: Router
  ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.createForm()

    this.getCategories()
  }

  /**
   * Cria formulário
   */
  private createForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria_id: ['', Validators.required],
    })
  }

  /**
   * Carrega lista de categorias
   */
  private getCategories() {
    this.category.getAll().subscribe(r => (this.categories = r))
  }

  /**
   * Cria novo produto
   */
  submit() {
    if (this.form.valid)
      this.service
        .post(this.form.value)
        .subscribe(() => this.router.navigate(['/products']))
  }
}
