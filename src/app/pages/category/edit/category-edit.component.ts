import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryEditComponent implements OnInit {
  /**
   * Formulário de edição
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: CategoryService,
    private router: Router
  ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.createForm()

    this.get()
  }

  /**
   * Cria formulário
   */
  private createForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  /**
   * Carrega dados da categoria selecionada
   */
  private get() {
    const id = this.route.snapshot.paramMap.get('id')

    this.service.get(id).subscribe(res => this.form.patchValue(res))
  }

  /**
   * Realiza alteração na categoria
   */
  submit() {
    if (this.form.valid)
      this.service
        .put(this.form.value)
        .subscribe(() => this.router.navigate(['/category']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }
}
