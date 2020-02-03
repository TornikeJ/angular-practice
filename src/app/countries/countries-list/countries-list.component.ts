import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {

  countries = [];

  filteredCountries = [];

  private _searchCountry: string;

  @Input() set searchCountry(value: string) {
    this._searchCountry = value;
    this.filterCountries(value);
  }

  get searchCountry() {
    return this._searchCountry;
  }

  filterCountries(value: string) {
    this.filteredCountries = this.countries.filter(arr => arr['name'].toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getAllCountries().subscribe(
      (countries: []) => {
        this.countries = [...countries];

        if (this.filteredCountries.length === 0) {
          this.filteredCountries = this.countries;
        }
      }
    )
  }

}
