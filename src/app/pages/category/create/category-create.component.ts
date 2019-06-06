import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryCreateComponent implements OnInit {
  /**
   * Formulário de cadastro
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    private router: Router
  ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.createForm()
  }

  /**
   * Cria formulário
   */
  private createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  /**
   * Cria nova categoria
   */
  submit() {
    if (this.form.valid)
      this.service
        .post(this.form.value)
        .subscribe(() => this.router.navigate(['/category']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }
}
