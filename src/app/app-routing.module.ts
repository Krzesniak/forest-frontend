import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {SimulationComponent} from "./simulation/simulation.component";
import {MapGeneratorComponent} from "./map-generator/map-generator.component";
import {MainAppComponent} from "./main-app/main-app.component";

const routes: Routes = [
  {
    path: 'map-generator', component: MapGeneratorComponent
  },
  {
    path: 'simulation', component: SimulationComponent
  },
  {
    path: '', component: MainAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
