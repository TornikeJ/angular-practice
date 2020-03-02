import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { User } from './user.model';
import { NgForm } from '@angular/forms';
import { DateGenerateComponent } from './date-generate.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { DataStorageService } from './data.storage.service';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  step = 0;

  date: {
    days,
    months,
    years;
  }
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

  userInput: {
    firstName: string;
    lastName: string;
    country: string;
    birthdayDay: number;
    birthdayMonth: string;
    birthdayYear: number;
    displayName: string;
    email: string;
    password: string;
    aboutMe: string;
  }

  rendererListener
  arrowkeyLocation = 0;
  arrowkeySelect;

  isLoginMode = true;
  isAuthenticated = false;
  errorMessage;

  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router,
    private dataService: DataStorageService
  ) {
  }

  ngOnInit() {

    this.authService.autoLogIn();

    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.router.navigate(['user']);
        this.isLoginMode = false;
      }
    })


    const dateGenerate = new DateGenerateComponent();


    this.date = {
      days: dateGenerate.days,
      months: dateGenerate.months,
      years: dateGenerate.years
    }

    this.userInput = {
      firstName: null,
      lastName: null,
      country: null,
      birthdayDay: null,
      birthdayMonth: null,
      birthdayYear: null,
      displayName: null,
      email: null,
      password: null,
      aboutMe: null
    }

    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        countries.forEach((country) => {
          this.countries.push(country['name']);
        })
      }
    )
  }


  clickListener(e: Event) {
    const month = this.wrapper.nativeElement.children[1].getElementsByClassName('month');
    const day = this.wrapper.nativeElement.children[1].getElementsByClassName('day');
    const year = this.wrapper.nativeElement.children[1].getElementsByClassName('year');
    const country = this.wrapper.nativeElement.children[1].getElementsByClassName('country');

    if (month && !(month as ElementRef)[0].contains(e.target)) {
      this.showMonth = 'none';
    }
    if (day && !(day as ElementRef)[0].contains(e.target)) {
      this.showDay = 'none';
    }
    if (year && !(year as ElementRef)[0].contains(e.target)) {
      this.showYear = 'none';
    }

    if (country && !(country as ElementRef)[0].contains(e.target)) {
      this.showCountry = 'none';
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;

    if (!this.isLoginMode) {
      this.rendererListener = this.renderer.listen('window', 'click', (e: Event) => {
        this.clickListener(e);
      });

    } else {
      this.rendererListener();
    }
  }

  previousStep() {
    this.step--;

    if (this.step == 0) {
      this.rendererListener = this.renderer.listen('window', 'click', (e: Event) => {
        this.clickListener(e);
      });
    }
  }

  nextStep(form: NgForm) {
    if (this.step == 0) {
      this.rendererListener();
    }

    this.step++;

    if (this.step === 3) {
      this.authService.signup(this.userInput.email, this.userInput.password).subscribe(
        (payload) => {
          this.router.navigate(['user'])
        }
      );

      this.dataService.storeUser(
        new UserInfo(
          this.userInput.firstName,
          this.userInput.lastName,
          this.userInput.birthdayDay,
          this.userInput.birthdayMonth,
          this.userInput.birthdayYear,
          this.userInput.country,
          this.userInput.aboutMe
        )
      );

      this.userInput = {
        firstName: null,
        lastName: null,
        country: null,
        birthdayDay: null,
        birthdayMonth: null,
        birthdayYear: null,
        displayName: null,
        email: null,
        password: null,
        aboutMe: null
      }
      form.reset();
      this.isLoginMode = true;
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
          this.userInput.birthdayYear = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'month':
          this.userInput.birthdayMonth = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'day':
          this.userInput.birthdayDay = (element.getElementsByClassName('active')[0].innerHTML).trim();
          break;
        case 'country':
          this.userInput.country = (element.getElementsByClassName('active')[0].innerHTML).trim();
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

  login(email: string, password: string) {
    this.authService.signin(email, password).subscribe((payload) => {
      this.router.navigate(['user'])
    }, (error) => {
      this.errorMessage = error;
    })
  }

}
