import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutesModule } from './app.routes'
import { AppComponent } from './app.component'

// layout
import { HeaderComponent } from './shared/layout/header/header.component'
import { FooterComponent } from './shared/layout/footer/footer.component'

// components
import { ComponentsModule } from './components/components.module'

// guard
import { AuthGuard } from './core/auth/auth-guard.service'

// pages
import { LoginComponent } from './pages/login/login.component'

// services
import { TokenService } from './core/auth/token.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  providers: [AuthGuard, TokenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
