import { TransactionFormBase } from './transaction-form-base.model';

export class TransactionFormDropdown extends TransactionFormBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'.toString()] || [];
    }
}
