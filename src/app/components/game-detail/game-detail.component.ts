import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/interfaces/igame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  game?: IGame;
  gameId!: string;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }
  
  ngOnInit() {
    this.route.params.subscribe((params) => (this.gameId = params['id']));
    this.gameService.getGameById(this.gameId).subscribe((game) => { this.game = game;});   
  }
}
