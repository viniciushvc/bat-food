import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
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
    private service: CategoryService
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
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
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
    this.service.put(this.form.value).subscribe(res => console.log(res))
  }
}
