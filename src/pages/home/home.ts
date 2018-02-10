import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SummaryPage } from '../summary/summary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  password: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  login(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.setRoot(SummaryPage);
    }, 3000);

  }

}
