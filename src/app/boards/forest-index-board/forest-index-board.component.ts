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
