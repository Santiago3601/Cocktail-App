import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './vistas/main/main.component'
import {FiltroComponent} from './vistas/filtro/filtro.component'
import {RandomComponent} from './vistas/random/random.component'

const routes: Routes = [
{path:'', redirectTo:'main', pathMatch:'full'},//Ruta por defecto
{path:'main', component:MainComponent},
{path:'filtro', component:FiltroComponent},
{path:'random', component:RandomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainComponent, FiltroComponent, RandomComponent]