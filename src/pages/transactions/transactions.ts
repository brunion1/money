import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { pendingTransactions, completedTransactions} from "../../mocks/transactions";

import { TransactionDetailsPage } from "../transaction-details/transaction-details";

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  pendingTransactions:Array<object> = pendingTransactions;
  completedTransactions:Array<object> = completedTransactions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  showDetails(){
    let modal = this.modalCtrl.create(TransactionDetailsPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

}
