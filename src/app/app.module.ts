import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SummaryPage } from '../pages/summary/summary';
import { TransactionsPage } from '../pages/transactions/transactions';
import { TransactionDetailsPage } from "../pages/transaction-details/transaction-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SummaryPage,
    TransactionsPage,
    TransactionDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SummaryPage,
    TransactionsPage,
    TransactionDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
