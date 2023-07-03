import {AfterContentInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTabGroup} from "@angular/material/tabs";
import {TerrainBoardComponent} from "../boards/terrain-board/terrain-board.component";
import {ForestIndexBoardComponent} from "../boards/forest-index-board/forest-index-board.component";
import {AgentBoardComponent} from "../boards/agent-board/agent-board.component";
import {FireBoardComponent} from "../boards/fire-board/fire-board.component";
import {PixelDetailsComponent} from "../boards/pixel-details/pixel-details.component";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements AfterViewInit {

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup | undefined;
  @ViewChild(TerrainBoardComponent) terrainComponent: TerrainBoardComponent | undefined;

  @ViewChild(ForestIndexBoardComponent) forestIndexBoardComponent: ForestIndexBoardComponent | undefined;

  @ViewChild(AgentBoardComponent) agentBoardComponent: AgentBoardComponent | undefined;
  @ViewChild(FireBoardComponent) fireBoardComponent : FireBoardComponent | undefined;
  @ViewChild(PixelDetailsComponent) pixelDetailsComponent : PixelDetailsComponent | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.tabGroup.selectedTabChange.subscribe(() => {
      this.pixelDetailsComponent?.stopInterval();
      this.terrainComponent?.stopInterval();
      this.fireBoardComponent?.stopInterval();
      this.forestIndexBoardComponent?.stopInterval();
      this.agentBoardComponent?.stopInterval();
      // @ts-ignore
      if (this.tabGroup.selectedIndex === 0) {
        this.terrainComponent?.startInterval();
      }
      else if(this.tabGroup?.selectedIndex === 1) {
        this.forestIndexBoardComponent?.startInterval();
      }
      else if(this.tabGroup?.selectedIndex === 2) {
        this.agentBoardComponent?.startInterval();
      }
      else if(this.tabGroup?.selectedIndex === 3) {
        this.fireBoardComponent?.startInterval();
      }
    });
  }

}
