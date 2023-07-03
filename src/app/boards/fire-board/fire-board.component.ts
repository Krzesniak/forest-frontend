import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ForestFireState, Terrain} from "../constants";
import {ForestService} from "../../forest.service";
import {PixelDetailsComponent} from "../pixel-details/pixel-details.component";
import {MessageService} from "../../message.service";

@Component({
  selector: 'app-fire-board',
  templateUrl: './fire-board.component.html',
  styleUrls: ['./fire-board.component.css']
})
export class FireBoardComponent implements OnInit, OnDestroy, AfterViewInit{

  interval: any;
  board: any;
  terrain = Terrain;

  @ViewChild(PixelDetailsComponent) pixelDetailsComponent : PixelDetailsComponent | undefined;

  constructor(public forestService: ForestService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.updateTempBoard();
    /*  interval(1000).subscribe(() => {
        this.updateBoard();
      });*/
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.updateBoard();
    }, 1000);
  }

  stopInterval(): void{
    clearInterval(this.interval);
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

  protected readonly ForestFireState = ForestFireState;

  changePixelDetails(i: number, j: number) {
    let id = i + ":" + j;
    console.log(id);
    this.messageService.sendMessage(id);
  }

  ngAfterViewInit(): void {
    this.pixelDetailsComponent?.getPixel("0:0");
  }
}
