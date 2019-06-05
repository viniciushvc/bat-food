import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingComponent } from './shopping.component'

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ShoppingRoutesModule {}
