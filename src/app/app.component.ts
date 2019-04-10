import { Component } from '@angular/core'
import { AuthGuard } from './core/auth/auth-guard.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'batfood'

  constructor(public authGuard: AuthGuard) {}
}
