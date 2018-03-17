import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string,
    state: string
  }

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider
  ) { }

  ionViewWillEnter() {
    
    // Set default location
    this.location = {
      city: 'San Francisco',
      state: 'CA'
    }

    // Get weather
    this.getWeather();
  }

  /**
   * Get weather
   */
  getWeather() {
    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(
      (data => {
        this.weather = data.current_observation;
      })
    );    
  }
}
