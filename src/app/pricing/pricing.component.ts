import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  checkBox = false;

  prices = [
    { Basic: 199.99, Professional: 249.99, Master: 399.99 },
    { Basic: 19.99, Professional: 24.99, Master: 39.99 }
  ]
  selectedRange;

  packages = [];

  constructor() {

    this.selectedRange = this.prices[0];

    this.packages = [{
      'title': 'Basic',
      'price': this.selectedRange.Basic,
      'storage': "500 GB",
      'users': 2,
      'data': 3,
    },
    {
      'title': 'Professional',
      'price': this.selectedRange.Professional,
      'storage': "1 TB",
      'users': 5,
      'data': 10,
    },
    {
      'title': 'Master',
      'price': this.selectedRange.Master,
      'storage': "2 TB",
      'users': 10,
      'data': 20,
    }];
  }

  changePackage() {
    if (!this.checkBox) {
      this.selectedRange = this.prices[1];
    } else {
      this.selectedRange = this.prices[0];
    }

    this.update();
  }

  update() {
    this.packages = [{
      'title': 'Basic',
      'price': this.selectedRange.Basic,
      'storage': "500 GB",
      'users': 2,
      'data': 3,
    },
    {
      'title': 'Professional',
      'price': this.selectedRange.Professional,
      'storage': "1 TB",
      'users': 5,
      'data': 10,
    },
    {
      'title': 'Master',
      'price': this.selectedRange.Master,
      'storage': "2 TB",
      'users': 10,
      'data': 20,
    }];
  }
}


