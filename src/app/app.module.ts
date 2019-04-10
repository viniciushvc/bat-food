import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutesModule } from './app.routes'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/layout/header/header.component'
import { FooterComponent } from './shared/layout/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { OrderComponent } from './pages/order/order.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthGuard } from './core/auth/auth-guard.service'
import { TokenService } from './core/auth/token.service'
import { ButtonComponent } from './components/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    LoginComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutesModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard, TokenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
