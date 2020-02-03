import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {

  countries = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {

    this.countriesService.getAllCountries().subscribe(
      (countries) => {
        for (let i = 0; i < 27; i++) {
          this.countries.push(countries[i]);
        }
        console.log(this.countries)
      }
    )
  }

}
