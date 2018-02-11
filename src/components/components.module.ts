import { NgModule } from '@angular/core';
import { AccountCardComponent } from './account-card/account-card';
import { TransactionComponent } from './transaction/transaction';
@NgModule({
	declarations: [AccountCardComponent,
    TransactionComponent],
	imports: [],
	exports: [AccountCardComponent,
    TransactionComponent]
})
export class ComponentsModule {}
