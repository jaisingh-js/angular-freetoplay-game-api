import { Component } from '@angular/core';
import { IGame } from 'src/app/interfaces/igame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent {
  games: IGame[] = [];
  filteredGames: IGame[] = [];

  constructor(private gameService: GameService){
    
  }

  ngOnInit() {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
      this.filteredGames = [...this.games];
    });
  }

  filterArray(event: string) {
    this.filteredGames = this.games.filter(
      (game) => game.title.toLowerCase().includes(event.toLowerCase())
    );
  }

}
