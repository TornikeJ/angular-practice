import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UrlShorteningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
