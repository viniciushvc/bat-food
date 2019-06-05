import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsEditComponent implements OnInit {
  /**
   * Formulário de edição
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductsService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.get(this.route.snapshot.paramMap.get('id'))
  }

  private get(id: string) {
    this.service.get(id).subscribe(res => this.form.patchValue(res))
  }

  submit() {
    this.service.post(this.form.value).subscribe(res => alert(res))
  }
}
