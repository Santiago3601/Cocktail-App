import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
// import { RandomComponent } from './vistas/random/random.component';
// import { FiltroComponent } from './vistas/filtro/filtro.component';
// import { MainComponent } from './vistas/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // RandomComponent,
    // FiltroComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
