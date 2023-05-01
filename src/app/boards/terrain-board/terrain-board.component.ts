import {Component} from '@angular/core';
import {interval} from "rxjs";
import {ForestService} from "../../forest.service";
import {Terrain} from "../constants";

@Component({
  selector: 'app-terrain-board',
  templateUrl: './terrain-board.component.html',
  styleUrls: ['./terrain-board.component.css']
})
export class TerrainBoardComponent {

  board: any;

  terrain = Terrain;

  constructor(public forestService: ForestService) {
  }

  ngOnInit(): void {
    this.updateBoard();
  /*  interval(1000).subscribe(() => {
      this.updateBoard();
    });*/
  }

  updateBoard(): void {
    this.forestService.getBoard().subscribe(date => {
      this.board = date;
    })
  }
}
