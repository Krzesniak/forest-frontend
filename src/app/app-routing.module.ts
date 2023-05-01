import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {SimulationComponent} from "./simulation/simulation.component";
import {MapGeneratorComponent} from "./map-generator/map-generator.component";

const routes: Routes = [
  {
    path: 'map-generator', component: MapGeneratorComponent
  },
  {
    path: 'app', component: SimulationComponent
  },
  {
    path: '', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
