import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from 'src/app/components/components.module'
import { ProductsRoutesModule } from './products.routes'

import { ProductsGetComponent } from './get/products-get.component'
import { ProductsCreateComponent } from './create/products-create.component'
import { ProductsEditComponent } from './edit/products-edit.component'

@NgModule({
  declarations: [
    ProductsGetComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class ProductsModule {}
