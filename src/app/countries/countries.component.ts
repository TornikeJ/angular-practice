import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {

  showRegions: string;
  countries = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.showRegions = 'none';

    this.countriesService.getAllCountries().subscribe(
      (countries) => {
        for (let i = 0; i < 5; i++) {
          this.countries.push(countries[i]);
        }
        console.log(this.countries)
      }
    )
  }

}
