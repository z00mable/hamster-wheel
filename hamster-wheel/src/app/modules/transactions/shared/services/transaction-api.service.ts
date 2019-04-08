import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../../../../configs/app.config';
import { HandleError, HttpErrorHandlerService } from '../../../../core/services/http-error-handler.service';
import { TransactionModel } from '../../../../shared/models/transaction.model';
import { ApiService } from '../../../../core/services/api.service';

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

  public addLocalTransaction(transaction: TransactionModel): Observable<any[]> {
    const response1 = this.apiService.getHistoricEurRate(transaction.date);
    const response2 = this.saveLocalTransaction(transaction);
    return forkJoin([response1, response2]);
  }

  private saveLocalTransaction(transaction: TransactionModel): Observable<TransactionModel> {
    return this.http.post<TransactionModel>
      (
        AppConfig.localJsonServerUrl + '/transactions',
        transaction,
        { headers: new HttpHeaders().set('Accept', 'application/json') }
      )
      .pipe(
        catchError(this.handleError('addLocalTransaction', transaction))
      );
  }
}
