import { TransactionFormBase } from './transaction-form-base.model';

export class TransactionFormTextbox extends TransactionFormBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'.toString()] || '';
    }
}