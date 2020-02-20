import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-landing',
  templateUrl: './manage-landing.component.html',
  styleUrls: ['./manage-landing.component.scss']
})
export class ManageLandingComponent implements OnInit, OnDestroy {

  @ViewChild('feedbacks', { static: false }) review: ElementRef;

  width = 512;
  margin = 30;
  scrollArea = -4 * this.width;
  firstColumn = 0;
  secondColumn = 4 * (this.width + this.margin);
  thirdColumn = 8 * (this.width + this.margin);
  startX;
  updatedX;
  displayElement = ['flex', 'flex', 'flex'];
  scrollX: number[] = [this.firstColumn, this.secondColumn, this.thirdColumn];
  position: number[] = [this.firstColumn, this.secondColumn, this.thirdColumn];
  backgroundStyle = 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')' + ',' + 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')';
  subscription: Subscription;
  source = timer(500, 40);

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  setEvent() {
    let mouseDown = false;
    this.subscription.unsubscribe();

    this.review.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
      this.startX = e.pageX;
      mouseDown = true;
    });
    this.review.nativeElement.addEventListener('mouseup', (e: MouseEvent) => {
      mouseDown = false;
      for (let i = 0; i < this.position.length; i++) {
        this.position[i] = this.scrollX[i];
        this.displayElement[i] = 'flex';
      }
    });
    this.review.nativeElement.addEventListener('mouseleave', (e: MouseEvent) => {
      mouseDown = false;
      for (let i = 0; i < this.position.length; i++) {
        this.position[i] = this.scrollX[i];
        this.displayElement[i] = 'flex';
      }
    });
    this.review.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      this.updatedX = e.pageX;
      if (mouseDown) {
        this.scrollX[0] = this.position[0] + this.updatedX - this.startX;
        this.scrollX[1] = this.position[1] + this.updatedX - this.startX;
        this.scrollX[2] = this.position[2] + this.updatedX - this.startX;

        for (let i = 0; i < this.scrollX.length; i++) {
          if (this.scrollX[i] < this.scrollArea) {
            this.scrollX[i] = this.checkMaxX(this.scrollX) + this.secondColumn;
            this.displayElement[i] = 'none';
          }

          if (this.scrollX[i] > 3 * -this.scrollArea) {
            this.scrollX[i] = this.checkMinX(this.scrollX) - this.secondColumn;
            this.displayElement[i] = 'none';
          }
        }
      }
    });
  }

  checkMaxX(position: number[]): number {
    let tempArr = [...position];
    return Math.max(...tempArr);
  }

  checkMinX(position: number[]): number {
    let tempArr = [...position];
    return Math.min(...tempArr);
  }

  startTimer() {
    this.subscription = this.source.subscribe(
      () => {
        this.scrollX[0] -= 0.5;
        this.scrollX[1] -= 0.5;
        this.scrollX[2] -= 0.5;
        this.displayElement[0] = 'flex';
        this.displayElement[1] = 'flex';
        this.displayElement[2] = 'flex';

        for (let i = 0; i < this.scrollX.length; i++) {

          if (this.scrollX[i] < this.scrollArea) {
            this.scrollX[i] = this.checkMaxX(this.scrollX) + this.secondColumn;
            this.displayElement[i] = 'none';
          }

          if (this.scrollX[i] > 3 * -this.scrollArea) {
            this.scrollX[i] = this.checkMinX(this.scrollX) - this.secondColumn;
            this.displayElement[i] = 'none';
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
