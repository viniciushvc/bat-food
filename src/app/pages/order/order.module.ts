import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OrderRoutesModule } from './order.routes'

import { OrderGetComponent } from './get/order.component'

@NgModule({
  declarations: [OrderGetComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderRoutesModule],
  providers: [],
  bootstrap: [],
})
export class OrderModule {}
