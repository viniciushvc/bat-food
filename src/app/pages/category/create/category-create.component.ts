import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryCreateComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    })
  }

  ngOnInit() {}
}
