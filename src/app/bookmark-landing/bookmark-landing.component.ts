import { Component, OnInit, HostListener } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription, Subject } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-bookmark-landing',
  templateUrl: './bookmark-landing.component.html',
  styleUrls: ['./bookmark-landing.component.scss']
})
export class BookmarkLandingComponent implements OnInit {

  displayStyle;
  showDesktop = false;
  innerWidth;
  selectedFeature = 1;
  selectAnswer: boolean[]= [];
  subscription: Subscription
  source;
  reset = new Subject();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }

  constructor() {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkWidth();

    this.subscription = this.reset.pipe(
      startWith(0),
      switchMap(() => timer(5000, 5000))
    ).subscribe(
      () => {
        this.selectedFeature++;

        if (this.selectedFeature == 4) {
          this.selectedFeature = 1;
        }
      }
    );
  }

  selectFeature(number: number) {
    this.selectedFeature = number;
    this.reset.next();
  }


  checkWidth() {
    if (this.innerWidth > 980) {
      this.displayStyle = 'flex';
    } else {
      this.showDesktop = false;
      this.displayStyle = 'none';
    }
  }

  menuClicked() {
    this.showDesktop = !this.showDesktop;

    if (this.showDesktop) {
      this.displayStyle = this.showDesktop && 'flex';
    }
    else {
      this.displayStyle = 'none';
    }
  }

  showAnswer(number: number) {
    if (this.selectAnswer[number] === true) {
      this.selectAnswer[number] = false;
    }
    else {
      this.selectAnswer[number] = true;
    }
  }
}
