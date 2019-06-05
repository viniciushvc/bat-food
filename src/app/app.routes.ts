import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shopping',
    loadChildren: './pages/shopping/shopping.module#ShoppingModule',
  },
  {
    path: 'order',
    loadChildren: './pages/order/order.module#OrderModule',
  },
  {
    path: 'category',
    loadChildren: './pages/category/category.module#CategoryModule',
  },
  {
    path: 'products',
    loadChildren: './pages/products/products.module#ProductsModule',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutesModule {}
