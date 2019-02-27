import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExchRateComponent } from './exch-rate/exch-rate.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// material
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

// servises
import { ExchRateService } from './exch-rate.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, ExchRateComponent, FooterComponent, HeaderComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRouterModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		// material
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule
	],
	providers: [ ExchRateService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
