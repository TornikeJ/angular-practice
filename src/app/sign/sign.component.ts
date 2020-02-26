import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CountriesService } from '../countries/countries.service';

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

  showMonth = 'none';
  showDay = 'none';
  showYear = 'none';

  selectedMonth;
  selectedDay;
  selectedYear;

  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.generateYears();

    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        countries.forEach((country) => {
          this.countries.push(country[name]);
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

    if (this.step === 2) {
      this.step = 0;
    }
  }
}
