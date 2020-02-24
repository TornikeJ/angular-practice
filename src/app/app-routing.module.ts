import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { UrlShorteningComponent } from './url-shortening/url-shortening.component';
import { HuddleComponent } from './huddle/huddle.component';
import { RpsgameComponent } from './rpsgame/rpsgame.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/countries-list/country-detail/country-detail.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountriesListResolver } from './countries/countries-list/countries-list.resolver.service';
import { BookmarkLandingComponent } from './bookmark-landing/bookmark-landing.component';
import { ManageLandingComponent } from './manage-landing/manage-landing.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign', component: SignComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'urlshortening', component: UrlShorteningComponent },
  { path: 'huddle', component: HuddleComponent },
  { path: 'rpsgame', component: RpsgameComponent },
  {
    path: 'countries', component: CountriesComponent, children:
      [
        { path: '', component: CountriesListComponent, resolve: { countriesList: CountriesListResolver } },
        { path: ':countryName', component: CountryDetailComponent }]
  },
  { path: 'bookmarklanding', component: BookmarkLandingComponent },
  { path: 'managelanding', component: ManageLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
