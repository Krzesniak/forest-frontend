import {Component, OnInit} from '@angular/core';
import {Terrain} from "../constants";
import {ForestService} from "../../forest.service";

@Component({
  selector: 'app-agent-board',
  templateUrl: './agent-board.component.html',
  styleUrls: ['./agent-board.component.css']
})
export class AgentBoardComponent implements OnInit{
  board: any;
  terrain = Terrain;

  constructor(public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateBoard();
  }
  updateBoard(): void {
    this.forestService.getBoard().subscribe(date => {
      this.board = date;
    })
  }
}
