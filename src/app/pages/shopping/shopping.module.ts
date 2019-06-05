import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShoppingRoutesModule } from './shopping.routes'
import { ComponentsModule } from 'src/app/components/components.module'

// page
import { ShoppingComponent } from './shopping.component'

// pipe
import { PricePipe } from 'src/app/shared/pipes/price.pipe'

import { ShoppingService } from './shopping.service'

@NgModule({
  declarations: [ShoppingComponent, PricePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutesModule,
    ComponentsModule,
  ],
  providers: [ShoppingService],
  bootstrap: [],
})
export class ShoppingModule {}
