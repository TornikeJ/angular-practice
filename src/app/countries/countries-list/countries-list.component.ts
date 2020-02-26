import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CountriesService } from '../countries.service';
import { StyleModel } from '../style.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  countryHeight: number
  difference: number;
  multiplyHeight: number = 1;


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWindowSize();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (document.body.offsetWidth < 450) {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        this.multiplyHeight++;
        this.filteredCountries = this.filterCountries(this.searchCountry);
      }
    } else {
      if ((window.innerHeight + window.scrollY) >= 2 * document.body.offsetHeight * this.multiplyHeight) {
        this.multiplyHeight++;
        this.filteredCountries = this.filterCountries(this.searchCountry);
      }
    }
  }


  private _searchCountry: string = '';

  set searchCountry(value: string) {
    this.multiplyHeight = 1;
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
    private _route: ActivatedRoute,
    private router: Router
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

    this._route.queryParams.subscribe(
      (params: Params) => {
        if (params['region']) {
          this.regionChanged(params['region']);
        }

        if (params['search']) {
          this.searchCountry = params['search'];
        }
      }
    )


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
    this.multiplyHeight = 1;

    if (this.regionSelected === 'Filter by Region') {
      this.countriesService.getAllCountries().subscribe(
        (countries: []) => {
          this.countries = [...countries];
          this.filteredCountries = this.countries;
          this.searchCountry = this.searchCountry;
          this.router.navigate(['/countries'], { queryParams: { region: null } })
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
      this.checkWindowSize();
    }
    catch (e) {
    }
    finally {
      this.cdRef.detectChanges();
    }
  }



  checkWindowSize() {
    const containerWidth = this.countriesElement.nativeElement.offsetWidth
    this.countryWidth = this.countriesElement.nativeElement.children[0].children[0].offsetWidth
    const rowLength = Math.floor(containerWidth / this.countryWidth);
    const lastRowLength = this.filteredCountries.length % rowLength;
    const rowGapLength = (containerWidth - this.countryWidth * rowLength) / (rowLength - 1);

    this.countryHeight = this.countriesElement.nativeElement.children[0].children[0].offsetHeight
    const viewHeight = 2 * document.body.offsetHeight

    let countriesAmount = viewHeight / this.countryHeight * rowLength

    if (!countriesAmount) {
      countriesAmount = 16;
    }

    this.filteredCountries = this.filteredCountries.filter((arr, index) => {
      return index < countriesAmount * this.multiplyHeight - 1;
    })


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
