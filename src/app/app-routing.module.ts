import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { UrlShorteningComponent } from './url-shortening/url-shortening.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'clipboard', component: ClipboardComponent},
  { path: 'urlshortening', component: UrlShorteningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }