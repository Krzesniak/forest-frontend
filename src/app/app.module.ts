import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerrainBoardComponent } from './boards/terrain-board/terrain-board.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './common/navbar/navbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { SimulationComponent } from './simulation/simulation.component';
import { MapGeneratorComponent } from './map-generator/map-generator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TerrainBoardComponent,
    NavbarComponent,
    SimulationComponent,
    MapGeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
