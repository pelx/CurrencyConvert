import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ExchRateService {
	baseUrl: string = 'https://api.exchangeratesapi.io/latest?base=';

	constructor(private http: HttpClient) {}

	getRates(base: string) {
		let url = this.baseUrl + base;
		console.log('URL: ++++++++++++++++  ', url);
		return this.http.get(url);
		// SAMPLE: GET https://api.exchangeratesapi.io/latest?base=USD
	}
}
