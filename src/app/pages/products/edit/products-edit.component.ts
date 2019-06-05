import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import { ProductsService } from '../products.service'
import { CategoryService } from '../../category/category.service'

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsEditComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories = []
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
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria_id: ['', Validators.required],
      imagem: ['', Validators.required],
    })
  }

  /**
   * Carrega lista de categorias
   */
  private getCategories() {
    this.category.getAll().subscribe(r => (this.categories = r))
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
  }
}
