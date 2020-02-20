import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage-landing',
  templateUrl: './manage-landing.component.html',
  styleUrls: ['./manage-landing.component.scss']
})
export class ManageLandingComponent implements OnInit {

  @ViewChild('feedbacks', { static: false }) review: ElementRef;

  width = 512;
  margin = 30;
  scrollArea = -4 * this.width;
  firstColumn = 0;
  secondColumn = 4 * (this.width + this.margin);
  thirdColumn = 8 * (this.width + this.margin);
  startX;
  updatedX;
  scrollX: number[] = [this.firstColumn, this.secondColumn, this.thirdColumn];
  position: number[] = [this.firstColumn, this.secondColumn, this.thirdColumn];
  backgroundStyle = 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')' + ',' + 'url(\'assets/manage-landing/bg-tablet-pattern.svg\')';
  
  constructor() { }

  ngOnInit() {
  }

  setEvent() {
    let mouseDown = false;

    this.review.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
      this.startX = e.pageX;
      mouseDown = true;
    });
    this.review.nativeElement.addEventListener('mouseup', (e: MouseEvent) => {
      mouseDown = false;
      for (let i = 0; i < this.position.length; i++) {
        this.position[i] = this.scrollX[i];
      }
    });
    this.review.nativeElement.addEventListener('mouseleave', (e: MouseEvent) => {
      mouseDown = false;
      for (let i = 0; i < this.position.length; i++) {
        this.position[i] = this.scrollX[i];
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
          }

          if (this.scrollX[i] > 3 * -this.scrollArea) {
            this.scrollX[i] = this.checkMinX(this.scrollX) - this.secondColumn;
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

}
