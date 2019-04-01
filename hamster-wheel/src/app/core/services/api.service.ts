import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ExchangeRateModel } from '../../shared/models/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }

  httpOptions: any;

  public getRemoteExchangeRates(): Observable<HttpResponse<ExchangeRateModel>> {
    return this.http.get<HttpResponse<ExchangeRateModel>>(AppConfig.exchangeRateApi + '/latest');
  }

  public addLocalExchangeRates(exchageRates: ExchangeRateModel) {
    return this.http.post<ExchangeRateModel>(AppConfig.localUrl + '/exchange-rate', exchageRates, this.httpOptions())
      .pipe(
        catchError(this.handleError('updateLocalExchangeRates', exchageRates))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `${operation} failed: ${error.message}`);

      if (error.status >= 500) {
        throw error;
      }

      return of(result as T);
    };
  }
}
