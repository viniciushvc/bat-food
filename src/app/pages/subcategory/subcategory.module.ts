import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SubcategoryRoutesModule } from './subcategory.routes'

import { SubcategoryComponent } from './subcategory.component'

@NgModule({
  declarations: [SubcategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubcategoryRoutesModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SubcategoryModule {}
