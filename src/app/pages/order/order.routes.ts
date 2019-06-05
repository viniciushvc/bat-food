import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { OrderGetComponent } from './get/order.component'

const routes: Routes = [
  {
    path: '',
    component: OrderGetComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class OrderRoutesModule {}
