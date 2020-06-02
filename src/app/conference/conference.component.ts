import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss', '../../assets/conference/stylesheets/reset.scss']
})
export class ConferenceComponent implements OnInit {
  displayStyle;
  showDesktop = false;
  innerWidth;

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

  }

  checkWidth() {
    if (this.innerWidth > 510) {
      this.displayStyle = 'block';
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
}
