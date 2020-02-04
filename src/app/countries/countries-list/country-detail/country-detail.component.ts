import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {


  country;
  currencies: string[] = [];
  languages: string[] = [];
  borderCountries = [];

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (route) => {
        
        const name = route.get('countryName');
        this.countriesService.getCountry(name).subscribe(
          (country) => {
            this.country = country[0];
            this.languages = [];
            this.currencies = [];
            this.borderCountries = [];


            this.country.languages.forEach((obj) => {
              const language: string = obj['name'];
              this.languages.push(language);
            });

            this.country.currencies.forEach((obj) => {
              const currency: string = obj['name'];
              this.currencies.push(currency);
            });

            this.country.borders.forEach((countryCode) => {
              this.countriesService.getCountryByCode(countryCode).subscribe(
                (country: string) => {
                  this.borderCountries.push(country['name']);
                }
              )
            });
          }
        );
      }
    )
  }
}
