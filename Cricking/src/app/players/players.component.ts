import { Component, OnInit } from '@angular/core';
//import { Players } from './players.model';
import {AddplayerService} from '../addplayer.service'


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers:[AddplayerService]
})
export class PlayersComponent implements OnInit {
  playerslist:string[]=[''];

  getPlayersList(){
    this.playerslist=this.playerService.getPlayers()
  }

  addNewPlayer(form:any){
    console.log(form.value.playerName)
    this.playerService.addPlayer(form.value.playerName)
  }
  
  deletePlayer(index){
    this.playerService.removePlayer(index)
  }

  constructor(private playerService:AddplayerService) { }

  ngOnInit() {
  }

}
