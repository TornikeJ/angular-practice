import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {

  countries = [];
  filteredCountries = [];

  showRegions: string;
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionSelected;


  @ViewChild('regionEl', { static: true }) regionElement: ElementRef;

  private _searchCountry: string;

  set searchCountry(value: string) {
    this._searchCountry = value;
    this.filteredCountries = this.filterCountries(value);
  }

  get searchCountry() {
    return this._searchCountry;
  }

  filterCountries(value: string) {
    return this.countries.filter(arr => arr['name'].toLowerCase().indexOf(value.toLowerCase()) !== -1 && (this.regionSelected !== 'Filter by Region' ? arr['region'] === this.regionSelected : true));
  }



  constructor(
    private countriesService: CountriesService,
    private renderer: Renderer2
  ) { }


  ngOnInit() {

    this.showRegions = 'none';
    this.regionSelected = 'Filter by Region'


    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.regionElement.nativeElement.contains(e.target)) {
        this.showRegions = 'none';
      }
    });

    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        this.countries = [...countries];
        this.filteredCountries = this.countries;
      }
    )

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
}
