import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenugComponent } from './menug/menug.component';
import { PaginaDoisComponent } from './pagina-dois/pagina-dois.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenugComponent,
    PaginaDoisComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
