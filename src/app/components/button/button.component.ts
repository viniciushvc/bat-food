import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string

  @Input() class: string

  @Input() type: string

  @Output() onClick = new EventEmitter<any>()

  constructor() {}

  onClickButton(event: any) {
    this.onClick.emit(event)
  }
}
