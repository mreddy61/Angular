import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TournamentComponent } from './Tournament/tournament.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { AddplayerService } from './addplayer.service';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TournamentComponent,
    PlayersComponent,
    TeamsComponent,
    HomeComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'matches',component:MatchesComponent},
      {path:'players',component:PlayersComponent},
      {path:'teams',component:TeamsComponent},
      {path:'tournaments',component:TournamentComponent}
    ]),
    
  ],
  providers: [AddplayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
