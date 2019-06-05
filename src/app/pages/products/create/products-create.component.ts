import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class ProductsCreateComponent implements OnInit {
  /**
   * Formulário de cadastro
   */
  form: FormGroup

  constructor(private fb: FormBuilder, private service: ProductsService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    })
  }

  ngOnInit() {}

  submit() {
    this.service.post(this.form.value).subscribe(res => alert(res))
  }
}
