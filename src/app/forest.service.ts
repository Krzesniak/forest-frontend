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

  generateForestIndexView(req: ForestPixelRequest) {
    return this.httpClient.post(this.HOSTNAME + 'forest-fire-index', req)
  }

  generateBoard(req: TerrainBoardRequest) {
  return this.httpClient.post(this.HOSTNAME + 'map-generator', req);
  }

  updateAgentBoard(board: AgentResourceRequest) {
    return this.httpClient.put(this.HOSTNAME + 'agents', board);
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

