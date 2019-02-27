import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ExchRateComponent } from './exch-rate/exch-rate.component';

const routes: Routes = [
	{ path: '', component: ExchRateComponent },
	{ path: 'exchrate', component: ExchRateComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}
