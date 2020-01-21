import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activatedComponent;
  color = '#ed6491';

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    this.router.events.subscribe(
      (router) => {
        if (router instanceof NavigationEnd) {
          this.activatedComponent = router.url.slice(1);
          this.updateNavbarColor(this.activatedComponent);
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
      default:
        this.color = '#ed6491';
    }
  }
}
