import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}

  rollTop() {
    window.scrollTo(0, 0)
  }
}
