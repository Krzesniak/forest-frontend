import {Component, OnInit} from '@angular/core';
import {ForestFireState, Terrain} from "../constants";
import {ForestService} from "../../forest.service";

@Component({
  selector: 'app-agent-board',
  templateUrl: './agent-board.component.html',
  styleUrls: ['./agent-board.component.css']
})
export class AgentBoardComponent implements OnInit{
  board: any;
  terrain = Terrain;
  interval: any;

  constructor(public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateTempBoard();
  }
  updateBoard(): void {
    this.forestService.getBoard().subscribe(date => {
      this.board = date;
    })
  }
  updateTempBoard(): void {
    this.forestService.getTempBoard().subscribe(date => {
      this.board = date;
    })
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.updateBoard();
    }, 1000);
  }

  stopInterval(): void{
    clearInterval(this.interval);
  }

  protected readonly ForestFireState = ForestFireState;
}
