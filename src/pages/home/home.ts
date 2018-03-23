import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    if (navParams.get('didLogin')) {
      localStorage.setItem('didLogin', 'savio');
    }
  }

  ionViewWillEnter() {
    var didLogin: boolean = false;
    if (!localStorage.getItem('didLogin')) {
      this.navCtrl.setRoot(LandingPage);
    }
  }

  open(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  logout() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'back'
    });
  }

}
