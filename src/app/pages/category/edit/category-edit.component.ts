import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryEditComponent implements OnInit {
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
