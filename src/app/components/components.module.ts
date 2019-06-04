import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [ButtonComponent],
})
export class ComponentsModule {}
