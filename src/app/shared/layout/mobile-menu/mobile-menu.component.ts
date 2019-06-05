import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  /**
   * Open menu
   */
  @Input() open: boolean

  /**
   * Close menu
   */
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit() {}

  closeMenu() {
    this.open = false

    this.onClose.emit(this.open)
  }
}
