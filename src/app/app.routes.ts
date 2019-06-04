import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './core/auth/auth-guard.service'

import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
  },

  {
    path: 'order',
    loadChildren: './pages/order/order.module#OrderModule',
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    loadChildren: './pages/category/category.module#CategoryModule',
  },
  {
    path: 'subcategory',
    canActivate: [AuthGuard],
    loadChildren: './pages/subcategory/subcategory.module#SubcategoryModule',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutesModule {}
