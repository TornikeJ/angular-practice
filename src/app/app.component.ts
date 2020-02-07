import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activatedComponent;
  color = '#ed6491';
  showLoadingIndicator = true;

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    this.activatedComponent = 'home';

    this.router.events.subscribe(
      (routerEvent) => {

        if (routerEvent instanceof NavigationStart) {
          this.showLoadingIndicator = true;
        }


        if (routerEvent instanceof NavigationEnd) {
          this.activatedComponent = routerEvent.url.slice(1).split('/')[0];
          this.updateNavbarColor(this.activatedComponent);
          this.showLoadingIndicator = false;
        }
      }
    )
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
      default:
        this.color = '#ed6491';
    }
  }
}
