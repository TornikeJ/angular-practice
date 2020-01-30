import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { of, Subscription } from "rxjs";
import { delay } from "rxjs/operators";
import { timer } from 'rxjs';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss']
})
export class VersusComponent implements OnInit, OnDestroy {

  @Input() userPicked: string;
  @Output() restart = new EventEmitter<string>();
  housePicked = 'paper';
  subscription: Subscription;
  time = 3;
  timerColorStyle;
  timerAnimationStyle;
  result;

  constructor() { }


  ngOnInit() {
    const source = timer(1000, 1000);
    this.subscription = source.subscribe(
      () => {
        this.time--;
        console.log(this.time);

        if (this.time == 0) {
          this.subscription.unsubscribe();
          this.timerColorStyle = 'transparent';
          this.timerAnimationStyle = 'paused';
          this.setHousePicked();
          this.getResult();
        }
      }
    );
  }

  setHousePicked() {
    const pick = Math.floor(Math.random() * 3);

    switch (pick) {
      case 0:
        this.housePicked = 'rock';
        break;
      case 1:
        this.housePicked = 'paper';
        break;
      case 2:
        this.housePicked = 'scissors';
        break;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  getResult() {
    if (this.userPicked === this.housePicked) {
      this.result = 'Draw';
      return;
    }

    if (this.userPicked === 'rock') {
      if (this.housePicked === 'scissors') {
        this.result = 'Win'
      }
      else {
        this.result = 'Lose';
      }
    }

    if (this.userPicked === 'paper') {
      if (this.housePicked === 'rock') {
        this.result = 'Win'
      }
      else {
        this.result = 'Lose';
      }
    }

    if (this.userPicked === 'scissors') {
      if (this.housePicked === 'paper') {
        this.result = 'Win'
      }
      else {
        this.result = 'Lose';
      }
    }

  }


  restartGame() {
    this.restart.emit(this.result);
  }
}
