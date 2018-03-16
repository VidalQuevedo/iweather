import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WeatherProvider {
  
  apiKey = '035cd4cbcb266ca3';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  /**
   * Get weather data
   * @param {string} city 
   * @param {string} state 
   * @returns {Observable<any>}
   */
  getWeather(city: string, state: string): Observable<any> {
    const url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${state}/${city}.json`;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error('Error retrieving weather data', err);
        return err;
      })
    )
  }

}
