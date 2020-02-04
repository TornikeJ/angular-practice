import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CountriesService } from './countries.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {

  darkMode: boolean;
  darkStyle = {
    backgroundColor: '#202c37',
    backgroundElementColor: '#2b3945',
    backgroundTextColor: '#FFFFFF',
  };

  lightStyle = {
    backgroundColor: '#f5f5f5',
    backgroundElementColor: '#ffffff',
    backgroundTextColor: '#000000',
  };

  backgroundColor;
  backgroundElementColor;
  backgroundTextColor;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.darkMode = false;
    this.backgroundColor = this.lightStyle.backgroundColor;
    this.backgroundElementColor = this.lightStyle.backgroundElementColor;
    this.backgroundTextColor = this.lightStyle.backgroundTextColor;
  }

  changeBackgroundColor() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.backgroundColor = this.darkStyle.backgroundColor;
      this.backgroundElementColor = this.darkStyle.backgroundElementColor;
      this.backgroundTextColor = this.darkStyle.backgroundTextColor;

      this.countriesService.switchMode.next(this.darkStyle);
    } else {
      this.backgroundColor = this.lightStyle.backgroundColor;
      this.backgroundElementColor = this.lightStyle.backgroundElementColor;
      this.backgroundTextColor = this.lightStyle.backgroundTextColor;

      this.countriesService.switchMode.next(this.lightStyle);
    }
  }

}
