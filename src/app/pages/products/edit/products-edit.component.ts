import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import { ProductsService } from '../products.service'
import { CategoryService } from '../../category/category.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsEditComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories$: Observable<any>

  /**
   * Formulário de edição
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductsService,
    private category: CategoryService,
    private router: Router
  ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.createForm()

    this.get()

    this.getCategories()
  }

  /**
   * Cria formulário
   */
  private createForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
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
   * Carrega dados do produto selecionado
   */
  private get() {
    const id = this.route.snapshot.paramMap.get('id')

    this.service.get(id).subscribe(res => this.form.patchValue(res))
  }

  /**
   * Realiza alteração no produto
   */
  submit() {
    if (this.form.valid)
      this.service
        .put(this.form.value)
        .subscribe(() => this.router.navigate(['/products']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }
}
