import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForestService {

  public HOSTNAME : string = "http://localhost:8080/"
  constructor(private httpClient: HttpClient) {
  }

  getBoard(){
    return this.httpClient.get(this.HOSTNAME + 'game-view');
  }
}
