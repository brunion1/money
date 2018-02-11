import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransactionsPage} from "../transactions/transactions";
import accounts from '../../mocks/accounts';

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  accounts:Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accounts = accounts;
  }

  seeTransactions(){
    this.navCtrl.push(TransactionsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }

}
