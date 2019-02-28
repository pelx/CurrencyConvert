import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from 'src/common/app-error';

@Injectable({
	providedIn: 'root'
})
export class ExchRateService {
	// SAMPLE: GET https://api.exchangeratesapi.io/latest?base=USD
	baseUrl: string = 'https://api.exchangeratesapi.io/latest?base=';

	constructor(private http: HttpClient) {}

	getRates(base: string) {
		let url = this.baseUrl + base;
		return this.http.get(url);
		// TODO: something has been changed in rxjs
		//.catchError((error: Response) => {
		//	Observable.throw(new AppError());
		//});
	}
}
