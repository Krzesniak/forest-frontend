import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {ForestService} from "../../forest.service";
import {Terrain} from "../constants";

@Component({
  selector: 'app-terrain-board',
  templateUrl: './terrain-board.component.html',
  styleUrls: ['./terrain-board.component.css']
})
export class TerrainBoardComponent implements OnInit {

  board: any;
  interval: any;
  terrain = Terrain;

  constructor(public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateTempBoard();
    /*  interval(1000).subscribe(() => {
        this.updateBoard();
      });*/
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

  stopInterval(): void {
    clearInterval(this.interval);
  }
}
