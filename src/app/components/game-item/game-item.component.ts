import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from 'src/app/interfaces/igame';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input() game!: IGame;

  constructor(private router: Router) {}

  getGameDetail(game: IGame) {
    this.router.navigate(['game-detail', game.id]);
  }
}
