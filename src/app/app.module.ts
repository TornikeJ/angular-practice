import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { UrlShorteningComponent } from './url-shortening/url-shortening.component';
import { UrlShorteningService } from './url-shortening/url-shortening.service';
import { TruncatePipe } from './shared/truncate.pipe';
import { HuddleComponent } from './huddle/huddle.component';
import { RpsgameComponent } from './rpsgame/rpsgame.component';
import { RulesComponent } from './rpsgame/rules/rules.component';
import { VersusComponent } from './rpsgame/versus/versus.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryDetailComponent } from './countries/countries-list/country-detail/country-detail.component';
import { BookmarkLandingComponent } from './bookmark-landing/bookmark-landing.component';
import { ManageLandingComponent } from './manage-landing/manage-landing.component';
import { SignComponent } from './sign/sign.component';
import { ConfrimEqualValidatorDirective } from './sign/confirm-equal-validator.directive';
import { FilterPipe } from './sign/filter.pipe';
import { HeaderComponent as SignHeader } from './sign/header.component';
import { HeaderComponent as BooksHeader } from './books-assignment/header/header.component';
import { IsInListValidatorDirective } from './sign/is-in-list-validator.directive';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './books-assignment/book-list/book-list.component';
import { BookDetailsComponent } from './books-assignment/book-list/book-details/book-details.component';
import * as fromApp from './books-assignment/store/app.reducer';
import { FavoritesComponent } from './books-assignment/book-list/favorites/favorites.component';
import { DescriptionLimitPipe } from './books-assignment/pipes/description-limit.pipe';
import { BooksComponent } from './books-assignment/books.component';
import { ConferenceComponent } from './conference/conference.component';
import { ConferenceHomeComponent } from './conference/conference-home/conference-home.component';
import { ConferenceSpeakersComponent } from './conference/conference-speakers/conference-speakers.component';
import { ConferenceScheduleComponent } from './conference/conference-schedule/conference-schedule.component';
import { ConferenceVenueComponent } from './conference/conference-venue/conference-venue.component';
import { ConferenceRegisterComponent } from './conference/conference-register/conference-register.component';


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HomeComponent,
    ClipboardComponent,
    UrlShorteningComponent,
    TruncatePipe,
    HuddleComponent,
    RpsgameComponent,
    RulesComponent,
    VersusComponent,
    CountriesComponent,
    CountriesListComponent,
    CountryDetailComponent,
    BookmarkLandingComponent,
    ManageLandingComponent,
    SignComponent,
    ConfrimEqualValidatorDirective,
    FilterPipe,
    SignHeader,
    IsInListValidatorDirective,
    BooksHeader,
    BookListComponent,
    BookDetailsComponent,
    FavoritesComponent,
    DescriptionLimitPipe,
    BooksComponent,
    ConferenceComponent,
    ConferenceHomeComponent,
    ConferenceSpeakersComponent,
    ConferenceScheduleComponent,
    ConferenceVenueComponent,
    ConferenceRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [UrlShorteningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
