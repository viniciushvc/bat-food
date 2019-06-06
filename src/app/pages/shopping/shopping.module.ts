import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShoppingRoutesModule } from './shopping.routes'
import { ComponentsModule } from 'src/app/components/components.module'

import { ShoppingComponent } from './shopping.component'

import { ShoppingService } from './shopping.service'

import { PricePipe } from 'src/app/shared/pipes/price.pipe'

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
