import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductsRoutesModule } from './products.routes'

import { ProductsComponent } from './products.component'

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutesModule,
  ],
  providers: [],
  bootstrap: [],
})
export class ProductsModule {}
