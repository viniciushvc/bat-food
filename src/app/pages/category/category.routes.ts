import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CategoryGetComponent } from './get/category-get.component'
import { CategoryCreateComponent } from './create/category-create.component'
import { CategoryEditComponent } from './edit/category-edit.component'

const routes: Routes = [
  {
    path: '',
    component: CategoryGetComponent,
  },
  {
    path: 'create',
    component: CategoryCreateComponent,
  },
  {
    path: ':id',
    component: CategoryEditComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CategoryRoutesModule {}
