import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

import { Storage } from '@ionic/storage';

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
    private weatherProvider: WeatherProvider,
    private storage: Storage
  ) { }
  
  ionViewWillEnter() {
    
    this.storage.get('location').then((value) => {
      if (value !== null) {
        this.location = JSON.parse(value);
      } else {
        // Set default location
        this.location = {
          city: 'Madison',
          state: 'WI'
        }
      }
      // Get weather
      this.getWeather();
    });
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
