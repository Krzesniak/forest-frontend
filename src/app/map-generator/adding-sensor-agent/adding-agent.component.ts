import {Component, Inject, OnInit} from '@angular/core';
import {Terrain} from "../../boards/constants";
import {AgentResourceRequest, ForestService} from "../../forest.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-adding-agent',
  templateUrl: './adding-agent.component.html',
  styleUrls: ['./adding-agent.component.css']
})
export class AddingAgentComponent implements OnInit {
  board: any;
  terrain = Terrain;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateBoard();
  }

  tickCell(col: number, row: number) {
    this.board[col][row].agentParameters.hasSensor = !this.board[col][row].agentParameters.hasSensor;
  }

  updateBoard(): void {
    this.forestService.getBoard().subscribe(date => {
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
