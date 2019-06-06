import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

import { ProductsService } from '../products.service'
import { CategoryService } from '../../category/category.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsCreateComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories$: Observable<any>

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
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      idCategory: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  /**
   * Carrega lista de categorias
   */
  private getCategories() {
    this.categories$ = this.category.getAll()
  }

  /**
   * Cria novo produto
   */
  submit() {
    if (this.form.valid)
      this.service
        .post(this.form.value)
        .subscribe(() => this.router.navigate(['/products']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }
}
