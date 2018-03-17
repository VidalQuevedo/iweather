import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage } from '../../pages/home/home';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  state: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.storage.get('location').then((value) => {
      if (value !== null) {
        let location = JSON.parse(value);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Madison';
        this.state = 'WI';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    const location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
