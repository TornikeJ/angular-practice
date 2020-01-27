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


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HomeComponent,
    ClipboardComponent,
    UrlShorteningComponent,
    TruncatePipe
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
