import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CountriesService } from '../countries.service';

@Injectable({ providedIn: 'root' })

export class CountriesListResolver implements Resolve<any>{
    constructor(private _countriesService: CountriesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._countriesService.getAllCountries();
    }
}