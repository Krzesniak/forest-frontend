import {Component, OnInit} from '@angular/core';
import {Terrain} from "../constants";
import {ForestService} from "../../forest.service";

@Component({
  selector: 'app-forest-index-board',
  templateUrl: './forest-index-board.component.html',
  styleUrls: ['./forest-index-board.component.css']
})
export class ForestIndexBoardComponent implements OnInit{

  board: any;
  interval: any;
  terrain = Terrain;

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

}
