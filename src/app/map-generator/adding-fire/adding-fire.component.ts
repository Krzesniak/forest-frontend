import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ForestService} from "../../forest.service";

@Component({
  selector: 'app-adding-fire', templateUrl: './adding-fire.component.html', styleUrls: ['./adding-fire.component.css']
})
export class AddingFireComponent implements OnInit {
  interval: any;

  board: any;
  isClicked: boolean = false;
  fireFormGroup: FormGroup;
  radioValue: FormControl = new FormControl();
  forestFireState = ForestFireState;

  constructor(public forestService: ForestService, private fb: FormBuilder) {
    this.fireFormGroup = this.fb.group({
      radioValue: this.radioValue
    })
  }


  ngOnInit(): void {
    this.updateTempBoard();
  }

  tickCell(col: number, row: number) {
    if (this.board[col][row].terrain == 'SAND' || this.board[col][row].terrain == 'WATER') return;
    if (this.board[col][row].fireParameter.forestFireState == ForestFireState.NONE) {
      this.board[col][row].fireParameter.forestFireState = this.radioValue.value;
    } else {
      this.board[col][row].fireParameter.forestFireState = ForestFireState.NONE;
    }
    console.log(this.board);

  }

  addFire() {
    this.forestService.addFire(this.board).subscribe((data) => console.log(data));
  }

  private updateTempBoard() {
    this.forestService.getTempBoard().subscribe(date => {
      this.board = date;
    })
  }
}

export enum ForestFireState {
  NONE = "NONE", LOW = "LOW", MEDIUM = "MEDIUM", HIGH = "HIGH", EXTREME = "EXTREME", DESTROYED = "DESTROYED"
}
