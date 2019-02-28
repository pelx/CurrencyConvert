import { ApiData } from './../interfaces/apidata';
import { Component, OnInit } from '@angular/core';
import { ExchRateService } from '../exch-rate.service';

@Component({
	selector: 'app-exch-rate',
	templateUrl: './exch-rate.component.html',
	styleUrls: [ './exch-rate.component.css' ]
})
export class ExchRateComponent implements OnInit {
	dataSource: ApiData;
	rates: Map<string, number>;
	baseCurrency: string;
	newCurrency: string;

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

	onBaseSelect(item: string) {
		if (item) {
			this.baseCurrency = item;
			this.service.getData(this.baseCurrency).subscribe((data) => {
				this.dataSource = data as ApiData;
				this.rates = this.dataSource.rates;
			});
		}

		// console.log('baseCurrency: ', this.baseCurrency);
	}

	onNewSelect(item: string) {
		if (item) {
			this.newCurrency = item;
			console.log('NewCurrency: ', this.newCurrency);
		}
	}
}
