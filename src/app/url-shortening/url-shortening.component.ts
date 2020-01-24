import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-url-shortening',
  templateUrl: './url-shortening.component.html',
  styleUrls: ['./url-shortening.component.scss']
})
export class UrlShorteningComponent implements OnInit {

  displayStyle;
  showDesktop = false;
  innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkWidth();
  }

  checkWidth() {
    if (this.innerWidth > 980) {
      this.displayStyle = 'flex';
    } else {
      this.showDesktop=false;
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
}
