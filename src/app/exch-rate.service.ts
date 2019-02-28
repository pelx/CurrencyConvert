import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { CatchError } from 'rxjs/operators/catchError';
// import { AppError } from 'src/common/app-error';

@Injectable({
	providedIn: 'root'
})
export class ExchRateService {
	// SAMPLE: GET https://api.exchangeratesapi.io/latest?base=USD
	baseUrl: string = 'https://api.exchangeratesapi.io/latest?base=';

	constructor(private http: HttpClient) {}

	// TODO: use specific error
	getRates(base: string) {
		let url = this.baseUrl + base;
		return this.http.get(url);
		// return this.http.get(url).catchError((error: Response) => {
		// 	Observable.throw(new AppError());
		// });
	}

	getData(base: string) {
		let url = this.baseUrl + base;
		return ajax(url).pipe(
			map((res) => {
				if (!res.response) {
					throw new Error('Empty result');
				}
				return res.response;
			}),
			catchError((err) => of([]))
		);
	}
}
