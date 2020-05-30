import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hoveredComponent;
  color;
  hover;

  constructor(

  ) { }


  ngOnInit() {

  }

  updateNavbarColor(component: string) {
    switch (component) {
      case 'home':
        this.color = '#ed6491';
        break;
      case 'pricing':
        this.color = '#ce9dff';
        break;
      case 'books':
        this.color = '#5862cf';
        break;
      case 'conference':
        this.color = '#648880';
        break;
      case 'clipboard':
        this.color = '#22ceb4';
        break;
      case 'urlshortening':
        this.color = '#2acfcf';
        break;
      case 'huddle':
        this.color = '#ff52bf';
        break;
      case 'rpsgame':
        this.color = '#1f3756';
        break;
      case 'countries':
        this.color = '#202c37';
        break;
      case 'bookmarklanding':
        this.color = '#5368df';
        break;
      case 'managelanding':
        this.color = '#f94b1d';
        break;
      case 'sign':
        this.color = '#38cc8c';
        break;
      default:
        this.color = '#ed6491';
    }
  }

}
