import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductsGetComponent } from './get/products-get.component'
import { ProductsCreateComponent } from './create/products-create.component'
import { ProductsEditComponent } from './edit/products-edit.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsGetComponent,
  },
  {
    path: 'create',
    component: ProductsCreateComponent,
  },
  {
    path: ':id',
    component: ProductsEditComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductsRoutesModule {}
