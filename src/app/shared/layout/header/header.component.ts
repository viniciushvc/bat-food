import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public api: ApiService) {}

  ngOnInit() {}
}
