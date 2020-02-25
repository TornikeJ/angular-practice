import { Component, OnInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-manage-landing',
  templateUrl: './manage-landing.component.html',
  styleUrls: ['./manage-landing.component.scss']
})
export class ManageLandingComponent implements OnInit, OnDestroy {

  @ViewChild('feedbacks', { static: false }) review: ElementRef;


  displayStyle;
  showDesktop = false;
  innerWidth;

  selectedReview = 1;
  selectMode = false;

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
  subscriptionDesktop: Subscription;
  subscriptionMobile: Subscription;
  reset = new Subject();
  source = timer(500, 40);


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }


  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.startTimer();
    this.checkWidth();
  }

  setEvent() {
    let mouseDown = false;

    this.subscriptionDesktop.unsubscribe();

    if (this.innerWidth > 600) {

      this.review.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
        this.startX = e.pageX;
        mouseDown = true;
      });

      this.review.nativeElement.addEventListener('touchstart', (e: TouchEvent) => {
        this.startX = e.touches[0].clientX;
        mouseDown = true;
      });

      this.review.nativeElement.addEventListener('mouseup', (e: MouseEvent) => {
        mouseDown = false;
        for (let i = 0; i < this.position.length; i++) {
          this.position[i] = this.scrollX[i];
          this.displayElement[i] = 'flex';
        }
      });

      this.review.nativeElement.addEventListener('touchcancel', (e: TouchEvent) => {
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

      this.review.nativeElement.addEventListener('touchend', (e: TouchEvent) => {
        mouseDown = false;
        for (let i = 0; i < this.position.length; i++) {
          this.position[i] = this.scrollX[i];
          this.displayElement[i] = 'flex';
        }
      });

      this.review.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
        this.updatedX = e.pageX;
        if (mouseDown) {
          this.moveElements();
        }
      });

      this.review.nativeElement.addEventListener('touchmove', (e: TouchEvent) => {
        this.updatedX = e.touches[0].clientX;

        if (mouseDown) {
          this.moveElements();
        }
      });
    }
  }

  moveElements() {

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

  checkMaxX(position: number[]): number {
    let tempArr = [...position];
    return Math.max(...tempArr);
  }

  checkMinX(position: number[]): number {
    let tempArr = [...position];
    return Math.min(...tempArr);
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


  checkWidth() {
    if (this.innerWidth > 820) {
      this.displayStyle = 'flex';
    } else {
      this.showDesktop = false;
      this.displayStyle = 'none';
    }

    if (this.innerWidth < 600) {
      this.displayElement[0] = 'none';
      this.displayElement[2] = 'none';
      this.scrollArea = 0;
      this.scrollX[1] = 0;
      this.selectMode = true;
      if (this.subscriptionDesktop) {
        this.subscriptionDesktop.unsubscribe();
      }
      this.startScrolling();
    } else {
      this.selectMode = false;
      this.scrollArea = -4 * this.width;
      this.scrollX = [this.firstColumn, this.secondColumn, this.thirdColumn];
      this.position = [this.firstColumn, this.secondColumn, this.thirdColumn];
      if (this.subscriptionMobile) {
        this.subscriptionMobile.unsubscribe();
      }
      this.startTimer();
    }
  }



  startTimer() {
    if (this.subscriptionDesktop) {
      this.subscriptionDesktop.unsubscribe();
    }

    this.source = timer(500, 40);
    this.subscriptionDesktop = this.source.subscribe(
      () => {
        if (this.innerWidth > 600) {

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
        }
      });
  }

  startScrolling() {
    if (this.subscriptionMobile) {
      this.subscriptionMobile.unsubscribe();
    }
    this.subscriptionMobile = this.reset.pipe(
      startWith(0),
      switchMap(() => timer(5000, 5000))
    ).subscribe(
      () => {
        this.selectedReview++;

        if (this.selectedReview == 5) {
          this.selectedReview = 1;
        }
      }
    );
  }

  selectReview(number: number) {
    this.selectedReview = number;
    this.reset.next();
  }


  ngOnDestroy() {
    if(this.subscriptionDesktop){
      this.subscriptionDesktop.unsubscribe();
    }

    if(this.subscriptionMobile){
      this.subscriptionMobile.unsubscribe();
    }
    
  }
}
