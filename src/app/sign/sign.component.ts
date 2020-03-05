import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { NgForm } from '@angular/forms';
import { DateGenerateComponent } from './date-generate.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { DataStorageService } from './data.storage.service';
import { storeUser } from './shared/user-store.model';
import { take, delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  step = 0;

  date: {
    days: string[],
    months: string[],
    years: number[];
  };

  countries = [];

  @ViewChild('registrationForm', { static: false }) public registrationForm: NgForm;
  @ViewChild('yearInput', { static: false }) yearInput: ElementRef;
  @ViewChild('monthInput', { static: false }) monthInput: ElementRef;
  @ViewChild('dayInput', { static: false }) dayInput: ElementRef;
  @ViewChild('countryInput', { static: false }) countryInput: ElementRef;
  @ViewChild('yearList', { static: false }) yearList: ElementRef;
  @ViewChild('dayList', { static: false }) dayList: ElementRef;
  @ViewChild('monthList', { static: false }) monthList: ElementRef;
  @ViewChild('countryList', { static: false }) countryList: ElementRef;
  updateForm = true;


  showMonth = 'none';
  showDay = 'none';
  showYear = 'none';
  showCountry = 'none';

  fetchedInput = {};

  userInput: {
    firstName: string;
    lastName: string;
    gender: string;
    country: string;
    birthdayDay: number;
    birthdayMonth: string;
    birthdayYear: number;
    displayName: string;
    email: string;
    password: string;
    aboutMe: string;
  };

  rendererListener;
  arrowkeyLocation = 0;
  arrowkeySelect;

  loginMode = new BehaviorSubject<boolean>(true);
  isLoginMode = true;
  isAuthenticated = false;

  isLoading = true;
  token;
  id;
  dbId;

  isInList;
  errorMessage;
  emailErrorMessage;
  emailVerified = false;
  editMode = false;

  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router,
    private dataService: DataStorageService
  ) { }

  ngOnInit() {

    this.authService.autoLogIn();

    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.router.navigate(['user']);
        this.loginMode.next(false);
        this.token = user.token;
        this.id = user.id;
        this.isLoading = true;
        this.dataService.fetchUser(user).pipe(take(1)).subscribe(
          (fetchedData) => {
            this.dbId = Object.keys(fetchedData)[0]
            const data: storeUser = fetchedData[this.dbId][this.id];
            const date = new Date(data.birthday);

            this.userInput = {
              firstName: data.firstName,
              lastName: data.lastName,
              gender: data.gender,
              country: data.country,
              birthdayDay: date.getDate(),
              birthdayMonth: this.date.months[date.getMonth()],
              birthdayYear: date.getFullYear(),
              displayName: data.displayName,
              email: data.email,
              password: null,
              aboutMe: data.aboutMe
            }


            this.isLoading = false;
            if (!this.isLoading) {
              this.authService.getSensitiveData(this.token).pipe(take(1)).subscribe(
                (payload) => {
                  this.userInput.password = payload.passwordHash;
                  this.emailVerified = payload.emailVerified;
                  Object.assign(this.fetchedInput, this.userInput);
                }
              );
            }
          });

      }
      else {
        this.router.navigate(['sign']);
        this.resetInputs();
        this.isLoading = false;
      }
    });


    const dateGenerate = new DateGenerateComponent();


    this.date = {
      days: dateGenerate.days,
      months: dateGenerate.months,
      years: dateGenerate.years
    }

    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        countries.forEach((country) => {
          this.countries.push(country['name']);
        })
      }
    )

    this.loginMode.subscribe((mode) => {
      if (mode === true) {
        this.isLoginMode = true;
      }
      else {
        this.isLoginMode = false;
      }

      this.rendererListener = this.renderer.listen('window', 'click', (e: Event) => {
        if (!this.monthInput || !this.dayInput || !this.yearInput || !this.countryInput) {
          this.rendererListener();
        } else {
          this.clickListener(e);
        }
      });
    });

  }


  clickListener(e: Event) {

    if (!this.monthInput.nativeElement.contains(e.target)) {
      this.showMonth = 'none';
    }
    if (!this.dayInput.nativeElement.contains(e.target)) {
      this.showDay = 'none';
    }
    if (!this.yearInput.nativeElement.contains(e.target)) {
      this.showYear = 'none';
    }

    if (!this.countryInput.nativeElement.contains(e.target)) {
      this.showCountry = 'none';
    }
  }

  previousStep() {
    this.step--;

    if (this.step == 0) {
      this.loginMode.next(false);
    }
  }

  nextStep(form: NgForm) {
    if (this.step == 0) {
      this.loginMode.next(false);
    }

    this.step++;

    if (this.step === 3) {
      this.signup();
      form.reset();
      this.loginMode.next(true);
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

    else if (event.key == 'Enter' || event.key == 'Tab') {
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

  signup() {
    this.authService.signup(this.userInput.email, this.userInput.password).subscribe(
      () => {
        this.router.navigate(['user']);

        const monthIndex = this.date.months.findIndex((month) => {
          return month === this.userInput.birthdayMonth;
        });

        const date = new Date(this.userInput.birthdayYear, monthIndex, this.userInput.birthdayDay);

        const storeUser: storeUser = {
          firstName: this.userInput.firstName,
          lastName: this.userInput.lastName,
          gender: this.userInput.gender,
          displayName: this.userInput.displayName,
          email: this.userInput.email,
          birthday: date,
          country: this.userInput.country,
          aboutMe: this.userInput.aboutMe,
        };

        this.dataService.storeUser(
          storeUser,
          this.id,
          this.token,
        );

        this.resetInputs();
      }
    );

  }

  login(email: string, password: string) {
    this.authService.signin(email, password).subscribe(() => {
      this.router.navigate(['user'])
      this.errorMessage = null;
    }, (error) => {
      this.errorMessage = error;
    })
  }

  updateUser() {

    const monthIndex = this.date.months.findIndex((month) => {
      return month === this.userInput.birthdayMonth;
    });
    const date = new Date(this.userInput.birthdayYear, monthIndex, this.userInput.birthdayDay);
    const storeUser: storeUser = {
      firstName: this.userInput.firstName,
      lastName: this.userInput.lastName,
      gender: this.userInput.gender,
      displayName: this.userInput.displayName,
      email: this.userInput.email,
      birthday: date,
      country: this.userInput.country,
      aboutMe: this.userInput.aboutMe,
    };

    this.dataService.updateUser(storeUser, this.dbId, this.id, this.token);

    this.resetInputs();
    this.registrationForm.reset();
  }

  resetInputs() {
    const temp = this.userInput;

    this.userInput = {
      firstName: null,
      lastName: null,
      gender: null,
      country: null,
      birthdayDay: null,
      birthdayMonth: null,
      birthdayYear: null,
      displayName: null,
      email: null,
      password: null,
      aboutMe: null
    };

    if (!!temp) {
      setTimeout(() => {
        this.userInput = temp;
      }, 1000)
    }
  }

  verifyEmail() {
    this.authService.emailVerification(this.token).subscribe(() => {
      this.emailErrorMessage = 'Email verification was sent';
      setTimeout(() => {
        this.emailErrorMessage = null;
      }, 2000)
    },
      (response) => {
        this.emailErrorMessage = response;
      });
  }

  changeEmail() {
    if (!this.editMode) {
      if (this.userInput.email !== this.fetchedInput['email']) {
        this.authService.changeEmail(this.token, this.userInput.email).pipe(delay(1000)).subscribe(() => {
          this.updateUser();
          this.authService.logout();
        },
          (response) => {
            this.emailErrorMessage = response;
          })
      }
    }
  }

  onChanges() {
    const keys = Object.keys(this.userInput)
    this.updateForm = true;

    keys.forEach((key) => {
      if (this.userInput[key] !== this.fetchedInput[key]) {
        this.updateForm = false;
        return
      }
    });
  }

  checkList(value: string, array: []) {
    const temp = [...array];

    this.isInList = (temp.filter((arr: string) => arr.toLowerCase().indexOf(value.toLowerCase()) !== -1)).length === 0 ? false : true;

  }
}
