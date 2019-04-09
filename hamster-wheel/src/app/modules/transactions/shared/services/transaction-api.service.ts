import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AppConfig } from '../../../../configs/app.config';
import { ApiService } from '../../../../core/services/api.service';
import { HandleError, HttpErrorHandlerService } from '../../../../core/services/http-error-handler.service';
import { TransactionModel } from '../../../../shared/models/transaction.model';

@Injectable()
export class TransactionApiService {

  private handleError: HandleError;

  private transactionAddSource = new Subject<TransactionModel>();
  public transactionLocalAdd$ = this.transactionAddSource.asObservable();

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService,
    private apiService: ApiService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('TransactionApiService');
  }

  public getAllTransactions(): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>(AppConfig.localJsonServerUrl + '/transactions')
      .pipe(
        catchError(this.handleError('getAllTransactions', null))
      );
  }

  public addTransaction(transaction: TransactionModel) {
    this.transactionAddSource.next(transaction);
  }

  public enrichAndSaveLocalTransaction(transaction: TransactionModel): Observable<TransactionModel> {
    return this.apiService.getHistoricEurRate(transaction.date)
      .pipe(
        mergeMap(data => {
          transaction.historicExchangeRate = data.rates.USD;
          transaction.exchangeRate = transaction.sellAmount / transaction.buyAmount;
          return this.saveLocalTransaction(transaction);
        }), catchError(this.handleError('enrichAndSaveLocalTransaction', transaction))
      )
  }

  private saveLocalTransaction(transaction: TransactionModel): Observable<TransactionModel> {
    return this.http.post<TransactionModel>
      (
        AppConfig.localJsonServerUrl + '/transactions',
        transaction,
        { headers: new HttpHeaders().set('Accept', 'application/json') }
      )
      .pipe(
        catchError(this.handleError('saveLocalTransaction', transaction))
      );
  }
}
