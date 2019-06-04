import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CategoryRoutesModule } from './category.routes'

import { CategoryComponent } from './category.component'

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutesModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CategoryModule {}
