import { ApiData } from './../interfaces/apidata';
import { Component, OnInit } from '@angular/core';
import { ExchRateService } from '../exch-rate.service';
import { Key } from 'readline';
// import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-exch-rate',
	templateUrl: './exch-rate.component.html',
	styleUrls: [ './exch-rate.component.css' ]
})
export class ExchRateComponent implements OnInit {
	dataSource: ApiData;
	rates: Map<string, number>;
	baseCurrency: string;
	newCurrency: Map<string, number>;

	constructor(private service: ExchRateService) {
		this.baseCurrency = 'USD';
		//this.newCurrency[this.baseCurrency] = 0.86;
	}

	ngOnInit() {
		this.service.getRates(this.baseCurrency).subscribe((data) => {
			console.log('Result: ', data);
			this.dataSource = data as ApiData;
			this.rates = this.dataSource.rates;
			console.log('Result converted: ', this.rates);
		});
	}

	onBaseSelect(item: any) {
		if (item) {
			this.baseCurrency = item.key;
			this.service.getRates(this.baseCurrency).subscribe((data) => {
				this.dataSource = data as ApiData;
				this.rates = this.dataSource.rates;
				console.log('Result converted: ', this.rates);
			});
		}

		console.log('baseCurrency: ', this.baseCurrency);
	}

	onNewSelect(item: any) {
		if (item) {
			this.newCurrency = item;

			console.log('NewCurrency: ', this.newCurrency);
		}
	}
}
