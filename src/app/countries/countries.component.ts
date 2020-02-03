import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {

  showRegions: string;

  constructor() { }

  ngOnInit() {
    this.showRegions = 'none';
  }

}
