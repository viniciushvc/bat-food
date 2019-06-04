import { Component, OnInit } from '@angular/core'
import { AuthGuard } from 'src/app/core/auth/auth-guard.service'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authGuard: AuthGuard, public api: ApiService) {}

  ngOnInit() {}
}
