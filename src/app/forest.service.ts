import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForestService {

  public HOSTNAME: string = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) {
  }

  getBoard() {
    return this.httpClient.get(this.HOSTNAME + 'simulations/boards');
  }

  getTempBoard() {
    return this.httpClient.get(this.HOSTNAME + 'configurations/maps/temp-game-view');
  }

  generateForestIndexView(req: ForestPixelRequest) {
    return this.httpClient.post(this.HOSTNAME + 'configurations/maps/fire-index', req)
  }

  generateBoard(req: TerrainBoardRequest) {
  return this.httpClient.post(this.HOSTNAME + 'configurations/maps/terrains', req);
  }

  updateAgentBoard(board: AgentResourceRequest) {
    return this.httpClient.put(this.HOSTNAME + 'configurations/maps/agents', board);
  }

  addFire(board: any) {
    return this.httpClient.put(this.HOSTNAME + 'configurations/maps/fires', board);
  }

  startSimulation() {
    return this.httpClient.post(this.HOSTNAME + 'simulations/start', null);
  }

  getPixelById(id: string) {
    return this.httpClient.get(this.HOSTNAME + 'simulations/pixels/' + id);
  }

  stopSimulation() {
    return this.httpClient.post(this.HOSTNAME + 'simulations/stop', null);
  }


  generateFinalBoard() {
    return this.httpClient.post(this.HOSTNAME + 'configurations/maps/generate', null);
  }

  loadConfiguration(formData: FormData) {
    return this.httpClient.post(this.HOSTNAME + "configurations/maps/load", formData );
  }
}

export interface AgentResourceRequest {
  board: any,
  testerAgents: number,
  firefighterAgents: number
  fireControllerAgents: number
}

export interface ForestPixelRequest {
  temperature: number,
  humidity: number,
  pressure: number,
  windDirection: number,
  windStrength: number
}

export interface TerrainBoundaries {
  sand: number,
  water: number,
  forestConiferous: number,
  forestDeciduous: number
}

export interface TerrainBoardRequest {
  seed: number,
  frequency: number,
  terrainProbability: TerrainBoundaries
}

