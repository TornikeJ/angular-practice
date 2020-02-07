import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Subject } from 'rxjs';
import { StyleModel } from '../style.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit, AfterViewChecked {

  countries = [];
  filteredCountries = [];

  showRegions: string;
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionSelected;



  @ViewChild('regionEl', { static: true }) regionElement: ElementRef;
  @ViewChild('countriesWidth', { static: true }) countriesElement: ElementRef;
  countriesWidh: number;
  countryWidth: number
  difference: number;


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWidth();
  }

  private _searchCountry: string = '';

  set searchCountry(value: string) {
    this._searchCountry = value;
    this.filteredCountries = this.filterCountries(value);
  }

  get searchCountry() {
    return this._searchCountry;
  }

  filterCountries(value: string) {
    return this.countries.filter(arr => arr['name'].toLowerCase().indexOf(value.toLowerCase()) !== -1
      &&
      (this.regionSelected !== 'Filter by Region' ? arr['region'] === this.regionSelected : true));
  }

  backgroundColor;
  backgroundElementColor;
  backgroundTextColor;

  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private _route: ActivatedRoute
  ) { }


  ngOnInit() {

    this.showRegions = 'none';
    this.regionSelected = 'Filter by Region'


    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.regionElement.nativeElement.contains(e.target)) {
        this.showRegions = 'none';
      }
    });

    this.countries = [...this._route.snapshot.data['countriesList']];

    this.filteredCountries = this.countries;

    // this.countriesService.getAllCountries().subscribe(
    //   (countries: []) => {
    //     this.countries = [...countries];
    //     this.filteredCountries = this.countries;
    //     console.log('finish');
    //   }
    // );

    this.countriesService.switchMode.subscribe(
      (style: StyleModel) => {
        this.backgroundColor = style.backgroundColor;
        this.backgroundElementColor = style.backgroundElementColor;
        this.backgroundTextColor = style.backgroundTextColor;
      }
    );

  }


  regionChanged(region: string) {
    this.regionSelected = region;

    if (this.regionSelected === 'Filter by Region') {
      this.countriesService.getAllCountries().subscribe(
        (countries: []) => {
          this.countries = [...countries];
          this.filteredCountries = this.countries;
          this.searchCountry = this.searchCountry;
        }
      )
    } else {
      this.countriesService.getCountriesByRegion(this.regionSelected).subscribe(
        (countries: []) => {
          this.filteredCountries = countries;
          this.searchCountry = this.searchCountry;
        }
      )
    }
  }

  ngAfterViewChecked() {
    try {
      this.checkWidth();
    }
    catch (e) {
    }
    finally {
      this.cdRef.detectChanges();
    }
  }

  checkWidth() {
    const containerWidth = this.countriesElement.nativeElement.offsetWidth
    this.countryWidth = this.countriesElement.nativeElement.children[0].children[0].offsetWidth
    const rowLength = Math.floor(containerWidth / this.countryWidth);
    const lastRowLength = this.filteredCountries.length % rowLength;
    const rowGapLength = (containerWidth - this.countryWidth * rowLength) / (rowLength - 1);


    if (lastRowLength === 0) {
      this.difference = 0;
    } else {
      this.difference = rowLength - lastRowLength;

      if (this.difference === 1) {
        this.countryWidth = (this.difference * this.countryWidth);
      }
      else {
        this.countryWidth = (this.difference * this.countryWidth) + rowGapLength;
      }
    }

  }

}
