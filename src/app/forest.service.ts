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
    return this.httpClient.get(this.HOSTNAME + 'game-view');
  }

  getTempBoard() {
    return this.httpClient.get(this.HOSTNAME + 'temp-game-view');
  }

  generateForestIndexView(req: ForestPixelRequest) {
    return this.httpClient.post(this.HOSTNAME + 'forest-fire-index', req)
  }

  generateBoard(req: TerrainBoardRequest) {
  return this.httpClient.post(this.HOSTNAME + 'map-generator', req);
  }

  updateAgentBoard(board: AgentResourceRequest) {
    return this.httpClient.put(this.HOSTNAME + 'agents', board);
  }

  addFire(board: any) {
    return this.httpClient.put(this.HOSTNAME + 'fires', board);
  }

  startSimulation() {
    return this.httpClient.post(this.HOSTNAME + 'simulation/start', null);
  }

  getPixelById(id: string) {
    return this.httpClient.get(this.HOSTNAME + 'pixel/' + id);
  }

  stopSimulation() {
    return this.httpClient.post(this.HOSTNAME + 'simulation/stop', null);
  }


  generateFinalBoard() {
    return this.httpClient.post(this.HOSTNAME + 'map/generate', null);
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

