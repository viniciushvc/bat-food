import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutesModule } from './app.routes'
import { AppComponent } from './app.component'

// layout
import { HeaderComponent } from './shared/layout/header/header.component'

// components
import { ComponentsModule } from './components/components.module'

// pages
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
