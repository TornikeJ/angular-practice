import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (route) => {
        const name = route.get('countryName');
        this.countriesService.getCountry(name).subscribe(
          (country) => {
            this.country = country[0];
            console.log(this.country);
            
            this.languages = [];
            this.currencies = [];

            this.country.languages.forEach((obj) => {
              const language: string = obj['name'];
              this.languages.push(language);
            });

            this.country.currencies.forEach((obj) => {
              const currency: string = obj['name'];
              this.currencies.push(currency);
            });
          }
        );
      }
    )
  }

}
