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
import {MatSliderModule} from "@angular/material/slider";
import { ForestIndexBoardComponent } from './boards/forest-index-board/forest-index-board.component';
import { AgentBoardComponent } from './boards/agent-board/agent-board.component';
import { AddingAgentComponent } from './map-generator/adding-sensor-agent/adding-agent.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    TerrainBoardComponent,
    NavbarComponent,
    SimulationComponent,
    MapGeneratorComponent,
    ForestIndexBoardComponent,
    AgentBoardComponent,
    AddingAgentComponent
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
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
