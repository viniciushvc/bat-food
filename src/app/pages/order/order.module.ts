import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { OrderRoutesModule } from './order.routes'

import { OrderComponent } from './order.component'

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderRoutesModule],
  providers: [],
  bootstrap: [],
})
export class OrderModule {}
