import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SubcategoryComponent } from './subcategory.component'

const routes: Routes = [
  {
    path: '',
    component: SubcategoryComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SubcategoryRoutesModule {}
