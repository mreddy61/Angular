import { Injectable } from '@angular/core';

@Injectable()
export class AddplayerService {
  players:string[]=['Ram Prasad','Sachin','Rohit']

  getPlayers():string[]{
    return this.players
  }

  addPlayer(newPlayer){
    this.players.push(newPlayer)
    return this.players
  }
  removePlayer(index){
    this.players.splice(index);
  }
  constructor() { }

}
