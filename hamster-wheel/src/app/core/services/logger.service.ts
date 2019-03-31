import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  static log(msg: string): void {
    console.log(msg);
  }

  static warn(msg: string, obj = {}): void {
    console.warn(msg, obj);
  }

  static error(msg: string, obj = {}): void {
    console.error(msg, obj);
  }
}