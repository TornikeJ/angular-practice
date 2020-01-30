import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpsgame',
  templateUrl: './rpsgame.component.html',
  styleUrls: ['./rpsgame.component.scss']
})
export class RpsgameComponent implements OnInit {

  score: number = 0;
  showRules: boolean;
  usersChoice;

  constructor() { }

  ngOnInit() {
    this.usersChoice = null;
    this.showRules = false;
  }

  updateScore(result: string) {
    switch (result) {
      case 'Win':
        this.score++;
        break;
      case 'Lose':
        this.score--;
        break;
      case 'Draw':
        break;
    }

    this.usersChoice = null;
  }

}
