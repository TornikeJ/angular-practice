import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hoveredComponent;
  color;

  constructor(

  ) { }


  ngOnInit() {

  }

  componentHover(component) {
    this.hoveredComponent = component.path[2].getAttribute('ng-reflect-router-link').slice(1);
    this.updateNavbarColor(this.hoveredComponent);
  }

  updateNavbarColor(component: string) {
    switch (component) {
      case 'home':
        this.color = '#ed6491';
        break;
      case 'pricing':
        this.color = '#ce9dff';
        break;
      case 'clipboard':
        this.color = '#22ceb4';
        break;
      default:
        this.color = '#ed6491';
    }
  }

}
