import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { BaseComponent } from 'src/app/core/base.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  /**
   * Toggle menu mobile
   */
  openMobile: boolean = false

  constructor(public api: ApiService) {
    super()
  }

  ngOnInit() {}

  toggleMenu() {
    this.openMobile = !this.openMobile
  }
}
