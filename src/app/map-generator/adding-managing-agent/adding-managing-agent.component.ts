import {Component, Inject, OnInit} from '@angular/core';
import {Terrain} from "../../boards/constants";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AgentResourceRequest, ForestService} from "../../forest.service";

@Component({
  selector: 'app-adding-managing-agent',
  templateUrl: './adding-managing-agent.component.html',
  styleUrls: ['./adding-managing-agent.component.css']
})
export class AddingManagingAgentComponent implements OnInit{
  board: any;
  terrain = Terrain;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateTempBoard();
  }

  tickCell(col: number, row: number) {
    this.board[col][row].agentParameters.center = !this.board[col][row].agentParameters.center;
  }

  updateTempBoard(): void {
    this.forestService.getTempBoard().subscribe(date => {
      this.board = date;
    })
  }

  updateAgents(): void {
    let req: AgentResourceRequest = {
      board: this.board, firefighterAgents: this.data.firefighterAgents,
      testerAgents: this.data.testerAgents, fireControllerAgents: this.data.fireControllerAgents
    }
    this.forestService.updateAgentBoard(req).subscribe(() => {
    });
  }
}
