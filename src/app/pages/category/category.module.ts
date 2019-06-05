import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from 'src/app/components/components.module'
import { CategoryRoutesModule } from './category.routes'

import { CategoryGetComponent } from './get/category-get.component'
import { CategoryEditComponent } from './edit/category-edit.component'
import { CategoryCreateComponent } from './create/category-create.component'

@NgModule({
  declarations: [
    CategoryGetComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CategoryModule {}
