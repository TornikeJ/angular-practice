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
import { BookListComponent } from './books-assignment/book-list/book-list.component';
import { BookListResolver } from './books-assignment/book-list/book-list.resolver.service';
import { BookDetailsComponent } from './books-assignment/book-list/book-details/book-details.component';
import { FavoritesComponent } from './books-assignment/book-list/favorites/favorites.component';
import { BooksComponent } from './books-assignment/books.component';
import { ConferenceComponent } from './conference/conference.component';
import { ConferenceHomeComponent } from './conference/conference-home/conference-home.component';
import { ConferenceSpeakersComponent } from './conference/conference-speakers/conference-speakers.component';
import { ConferenceScheduleComponent } from './conference/conference-schedule/conference-schedule.component';
import { ConferenceVenueComponent } from './conference/conference-venue/conference-venue.component';
import { ConferenceRegisterComponent } from './conference/conference-register/conference-register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign', component: SignComponent },
  { path: 'user', component: SignComponent },
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
  { path: 'managelanding', component: ManageLandingComponent },
  {
    path: 'books', component: BooksComponent, children:
      [
        { path: '', component: BookListComponent, resolve: { bookList: BookListResolver } },
        { path: 'favorites', component: FavoritesComponent },
        { path: ':bookId', component: BookDetailsComponent },
      ]
  },
  {
    path: 'conference', component: ConferenceComponent, children:
      [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: ConferenceHomeComponent },
        { path: 'speakers', component: ConferenceSpeakersComponent },
        { path: 'schedule', component: ConferenceScheduleComponent },
        { path: 'venue', component: ConferenceVenueComponent },
        { path: 'register', component: ConferenceRegisterComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
