import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage-landing',
  templateUrl: './manage-landing.component.html',
  styleUrls: ['./manage-landing.component.scss']
})
export class ManageLandingComponent implements OnInit {

  @ViewChild('feedbacks', { static: false }) review: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  setEvent() {
    let startX;
    let updatedX;



    this.review.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
      startX = e.pageX;

      console.log(startX)
    });
    this.review.nativeElement.addEventListener('mouseup', (e: MouseEvent) => {
      updatedX = e.pageX;
      let element = document.getElementsByClassName('review');


      console.log(
      )
      element[0].scrollLeft += 500
    });
  }
}
