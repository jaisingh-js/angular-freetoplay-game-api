import { Component } from '@angular/core';
import { Subject } from 'rxjs';
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
  subject = new Subject();
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private gameService: GameService){
    
  }

  ngOnInit() {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
      this.filteredGames = [...this.games];
    });
  }

  filterArrayByName(searchText: string) {
    this.filteredGames = this.games.filter(
      (game) => game.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filterArrayByCategory(searchText: string) {
    this.gameService.getGameByCategory(searchText).subscribe({
      next: (games) => (this.filteredGames = games),
      error: (error) => {
        this.errorMessage = 'category not found. please try again!';
        this.showError = true;
      }
    });
  }

  filterArrayByPlatform(searchText: string) {
    this.gameService.getGameByPlatform(searchText).subscribe({
      next: (games) => (this.filteredGames = games),
      error: (error) => {
        this.errorMessage = 'platform not found. please try again!';
        this.showError = true;
      }
    });
  }

  updateList(event: { searchText: string; option: string;}) {
    switch (event.option) {
      case "1":
        this.filterArrayByName(event.searchText);
        break;
      
      case "2":
        this.filterArrayByCategory(event.searchText);
        break;
      
      case "3":
        this.filterArrayByPlatform(event.searchText);
        break;
    }
  }

  removeShowError() {
    this.showError = false;
  }

}
