import {Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ForestPixelRequest, ForestService, TerrainBoardRequest} from "../forest.service";
import {TerrainBoardComponent} from "../boards/terrain-board/terrain-board.component";
import {ForestIndexBoardComponent} from "../boards/forest-index-board/forest-index-board.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddingAgentComponent} from "./adding-sensor-agent/adding-agent.component";

@Component({
  selector: 'app-map-generator',
  templateUrl: './map-generator.component.html',
  styleUrls: ['./map-generator.component.css'],
})
export class MapGeneratorComponent {
  firstFormGroup = this._formBuilder.group({
    seed: [2, Validators.required],
    frequency: [15, Validators.required],
    sand: [0, Validators.required],
    water: [0, Validators.required],
    forestConiferous: [0, Validators.required],
    forestDeciduous: [0, Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    temperature: [20, Validators.required],
    humidity: [80, Validators.required],
    windDirection: [90, Validators.required],
    windSpeed: [10, Validators.required],
    pressure: [1024, Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    testerAgents: [1, Validators.required],
    firefighterAgents: [1, Validators.required],
    sensorAgents: [1, Validators.required],
    fireControllerAgents: [1, Validators.required],
    managingAgents: [1, Validators.required],
    fireVehicles: [1, Validators.required]
  });
  isLinear: boolean = false;

  @ViewChild(TerrainBoardComponent) terrainComponent: TerrainBoardComponent | undefined;

  @ViewChild(ForestIndexBoardComponent) forestIndexBoardComponent: ForestIndexBoardComponent | undefined;


  constructor(private _formBuilder: FormBuilder, private forestService: ForestService,
              public dialog: MatDialog) {
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  generate() {
    let req: TerrainBoardRequest =
      {
        seed: this.firstFormGroup.controls['seed'].value!,
        frequency: this.firstFormGroup.controls['frequency'].value!,
        terrainProbability: {
          forestConiferous: this.firstFormGroup.controls['forestConiferous'].value!,
          forestDeciduous: this.firstFormGroup.controls['forestDeciduous'].value!,
          sand: this.firstFormGroup.controls['sand'].value!,
          water: this.firstFormGroup.controls['water'].value!
        }
      };
    this.forestService.generateBoard(req).subscribe(() => {
      this.terrainComponent?.updateBoard();
    })
  }

  generateForestFireIndex() {
    let req: ForestPixelRequest =
      {
        temperature: this.secondFormGroup.controls['temperature'].value!,
        humidity: this.secondFormGroup.controls['humidity'].value!,
        windDirection: this.secondFormGroup.controls['humidity'].value!,
        pressure: this.secondFormGroup.controls['pressure'].value!,
        windStrength: this.secondFormGroup.controls['windSpeed'].value!
      };
    this.forestService.generateForestIndexView(req).subscribe(() => {
      this.forestIndexBoardComponent?.updateBoard();
    })
  }

  addSensorAgents() {
    let firefighterAgents = this.thirdFormGroup.controls['firefighterAgents'].value!;
    let fireControllerAgents = this.thirdFormGroup.controls['fireControllerAgents'].value!;
    let testerAgents = this.thirdFormGroup.controls['testerAgents'].value!;

    const dialogConfig: MatDialogConfig = {
      maxWidth: '99.5%',
      height: '90%',
      data: {sensorAgents: firefighterAgents, testerAgents: testerAgents,
        fireControllerAgents: fireControllerAgents}
    };
    this.dialog.open(AddingAgentComponent, dialogConfig);
  }

  addManagingAgents() {
    return;
  }


}
