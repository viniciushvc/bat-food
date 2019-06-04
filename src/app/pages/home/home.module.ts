import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeRoutesModule } from './home.routes'
import { ComponentsModule } from 'src/app/components/components.module'

// page
import { HomeComponent } from './home.component'

// pipe
import { PricePipe } from 'src/app/shared/pipes/price.pipe'

import { HomeService } from './home.service'

@NgModule({
  declarations: [HomeComponent, PricePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutesModule,
    ComponentsModule,
  ],
  providers: [HomeService],
  bootstrap: [],
})
export class HomeModule {}
