import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
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
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
