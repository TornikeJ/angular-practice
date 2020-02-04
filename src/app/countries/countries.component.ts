import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {

  backgroundColor = '#f5f5f5';
  backgroundElementColor = '#dddadae7';
  backgroundTextColor = '#000000';
  darkMode: boolean

  // #2b3945

  constructor(

  ) { }

  ngOnInit() {
    this.darkMode = false;
  }

  changeBackgroundColor() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.backgroundColor = '#202c37';
      this.backgroundElementColor = '#2b3945';
      this.backgroundTextColor = '#FFFFFF';
    }
    else {
      this.backgroundColor = '#f5f5f5';
      this.backgroundElementColor = '#dddadae7';
      this.backgroundTextColor = '#000000';
    }
  }

}
