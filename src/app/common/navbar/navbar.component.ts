import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ForestService} from "../../forest.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private forestService: ForestService) {
  }

  startSimulation() {
    this.forestService.startSimulation().subscribe(() => console.log("Start simulation"));
  }

  endSimulation() {

  }

  newSimulation() {
    this.router.navigate(['/map-generator'])
  }

  stopSimulation() {
    this.forestService.stopSimulation().subscribe(() => console.log("Stop simulation"));
  }
}
