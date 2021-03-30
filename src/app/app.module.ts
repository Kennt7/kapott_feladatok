import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomesticCatComponent } from './domestic-cat/domestic-cat.component';
import { WildcatComponent } from './wildcat/wildcat.component';
import { BobCatComponent } from './bob-cat/bob-cat.component';
import { LionComponent } from './lion/lion.component';
import { LeopardComponent } from './leopard/leopard.component';
import { PantherComponent } from './panther/panther.component';
import { GepardComponent } from './gepard/gepard.component';
import { PumaComponent } from './puma/puma.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DomesticCatComponent,
    WildcatComponent,
    BobCatComponent,
    LionComponent,
    LeopardComponent,
    PantherComponent,
    GepardComponent,
    PumaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
