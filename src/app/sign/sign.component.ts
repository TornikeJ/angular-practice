import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  step = 0;

  days =
    [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
      '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ];

  months =
    [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'Octomber', 'November', 'December'
    ];

  years = [];
  countries = [];

  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;
  @ViewChild('yearList', { static: false }) yearList: ElementRef;
  @ViewChild('dayList', { static: false }) dayList: ElementRef;
  @ViewChild('monthList', { static: false }) monthList: ElementRef;
  @ViewChild('countryList', { static: false }) countryList: ElementRef;

  showMonth = 'none';
  showDay = 'none';
  showYear = 'none';
  showCountry = 'none';

  selectedMonth;
  selectedDay;
  selectedYear;
  selectedCountry;

  arrowkeyLocation = 0;
  arrowkeySelect;

  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2
  ) {
    console.log(new UserModel('Tornike', 'Janashia', 26, 'August', 1996, 'Georgia').birthday);
  }

  ngOnInit() {
    this.generateYears();

    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        countries.forEach((country) => {
          this.countries.push(country['name']);
        })
      }
    )

    this.renderer.listen('window', 'click', (e: Event) => {
      if (!(this.wrapper.nativeElement.children[1].getElementsByClassName('month') as ElementRef)[0].contains(e.target)) {
        this.showMonth = 'none';
      }
      if (!(this.wrapper.nativeElement.children[1].getElementsByClassName('day') as ElementRef)[0].contains(e.target)) {
        this.showDay = 'none';
      }
      if (!(this.wrapper.nativeElement.children[1].getElementsByClassName('year') as ElementRef)[0].contains(e.target)) {
        this.showYear = 'none';
      }
      if (!(this.wrapper.nativeElement.children[1].getElementsByClassName('country') as ElementRef)[0].contains(e.target)) {
        this.showCountry = 'none';
      }
    });
  }


  generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 120;

    for (let i = currentYear; i >= startYear; i--) {
      this.years.push(i);
    }
  }

  changeStep() {
    this.step++;

    if (this.step === 3) {
      this.step = 0;
    }
  }

  onKey(event) {
    const name = event.target.name;
    let element;

    switch (name) {
      case 'year':
        element = this.yearList.nativeElement;
        break;
      case 'month':
        element = this.monthList.nativeElement;
        break;
      case 'day':
        element = this.dayList.nativeElement;
        break;
      case 'country':
        element = this.countryList.nativeElement;
        break;
    }

    if (event.key == 'ArrowDown') {
      element.scrollTop += 22;
      this.arrowkeyLocation++;
    }

    else if (event.key == 'ArrowUp') {
      element.scrollTop -= 22;
      this.arrowkeyLocation--;
    }

    else if (event.key == 'Enter') {
      switch (name) {
        case 'year':
          this.selectedYear = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'month':
          this.selectedMonth = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'day':
          this.selectedDay = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'country':
          this.selectedCountry = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
      }

      this.arrowkeyLocation = 0;
      element.scrollTop = 0;
    }

    else if (event.key == 'Backspace') {
      element.scrollTop = 0;
      this.arrowkeyLocation = 0;
    }

    else {
      this.arrowkeyLocation = 0;
      element.scrollTop = 0;
    }

    if (this.arrowkeyLocation < 0) {
      this.arrowkeyLocation = 0;
    }

    if (this.arrowkeyLocation > element.children.length - 1) {
      this.arrowkeyLocation = element.children.length - 1;
    }
  }
}
